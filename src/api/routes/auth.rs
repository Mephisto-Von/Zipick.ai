use axum::{extract::State, Json, Router, routing::post};
use jsonwebtoken::{encode, EncodingKey, Header};
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use argon2::{Argon2, PasswordHash, PasswordHasher, PasswordVerifier};
use argon2::password_hash::SaltString;
use rand::rngs::OsRng;
use uuid::Uuid;

use crate::api::{middleware::auth::Claims, AppState};
use crate::core::error::{AppError, AppResult};
use crate::models::user::CreateUser;

#[derive(Debug, Deserialize)]
pub struct LoginRequest {
    pub email: String,
    pub password: String,
}

#[derive(Debug, Deserialize)]
pub struct RegisterRequest {
    pub email: String,
    pub password: String,
    pub name: String,
}

#[derive(Debug, Serialize)]
pub struct AuthResponse {
    pub token: String,
    pub user_id: Uuid,
    pub email: String,
    pub name: String,
    pub role: String,
}

async fn register(
    State(state): State<AppState>,
    Json(input): Json<RegisterRequest>,
) -> AppResult<Json<Value>> {
    let existing = state.user_repo.find_by_email(&input.email).await?;
    if existing.is_some() {
        return Err(AppError::Conflict("Email already registered".into()));
    }

    let salt = SaltString::generate(&mut OsRng);
    let password_hash = Argon2::default()
        .hash_password(input.password.as_bytes(), &salt)
        .map_err(|e| AppError::Internal(format!("Password hashing failed: {}", e)))?
        .to_string();

    let user = state.user_repo.create(&CreateUser {
        email: input.email,
        password_hash,
        name: input.name,
        role: "consumer".into(),
    }).await?;

    let token = generate_token(user.id, &user.email, &user.role, &state.config.jwt_secret)?;

    Ok(Json(json!(AuthResponse {
        token,
        user_id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
    })))
}

async fn login(
    State(state): State<AppState>,
    Json(input): Json<LoginRequest>,
) -> AppResult<Json<Value>> {
    let user = state.user_repo.find_by_email(&input.email)
        .await?
        .ok_or_else(|| AppError::Unauthorized("Invalid email or password".into()))?;

    let parsed_hash = PasswordHash::new(&user.password_hash)
        .map_err(|e| AppError::Internal(format!("Invalid hash: {}", e)))?;

    Argon2::default()
        .verify_password(input.password.as_bytes(), &parsed_hash)
        .map_err(|_| AppError::Unauthorized("Invalid email or password".into()))?;

    let token = generate_token(user.id, &user.email, &user.role, &state.config.jwt_secret)?;

    Ok(Json(json!(AuthResponse {
        token,
        user_id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
    })))
}

fn generate_token(user_id: Uuid, email: &str, role: &str, secret: &str) -> AppResult<String> {
    let now = chrono::Utc::now();
    let claims = Claims {
        sub: user_id,
        email: email.to_string(),
        role: role.to_string(),
        iat: now.timestamp() as usize,
        exp: (now + chrono::Duration::days(30)).timestamp() as usize,
    };

    let token = encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(secret.as_bytes()),
    )
    .map_err(|e| AppError::Internal(format!("Token generation failed: {}", e)))?;

    Ok(token)
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/api/v1/auth/register", post(register))
        .route("/api/v1/auth/login", post(login))
}
