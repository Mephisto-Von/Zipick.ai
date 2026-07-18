use axum::{
    extract::State,
    Json, Router,
    routing::get,
};
use serde_json::{json, Value};

use crate::api::{middleware::auth::AuthenticatedUser, AppState};
use crate::core::error::AppResult;
use crate::core::types::ApiResponse;

async fn get_profile(
    State(state): State<AppState>,
    user: AuthenticatedUser,
) -> AppResult<Json<Value>> {
    let profile = state.user_repo.find_by_id(user.id)
        .await?
        .ok_or_else(|| crate::core::error::AppError::NotFound("User not found".into()))?;

    Ok(Json(json!(ApiResponse::new(profile))))
}

async fn get_preferences(
    State(state): State<AppState>,
    user: AuthenticatedUser,
) -> AppResult<Json<Value>> {
    let profile = state.user_repo.find_by_id(user.id)
        .await?
        .ok_or_else(|| crate::core::error::AppError::NotFound("User not found".into()))?;

    Ok(Json(json!(ApiResponse::new(profile.preferences))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/api/v1/users/me", get(get_profile))
        .route("/api/v1/users/me/preferences", get(get_preferences))
}
