use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;

use crate::core::types::Timestamp;

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct User {
    pub id: Uuid,
    pub email: String,
    pub password_hash: String,
    pub name: String,
    pub role: String,
    pub avatar_url: Option<String>,
    pub preferences: Option<serde_json::Value>,
    pub ai_memory: Option<serde_json::Value>,
    pub email_verified: bool,
    pub is_active: bool,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateUser {
    pub email: String,
    pub password_hash: String,
    pub name: String,
    pub role: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdateUser {
    pub name: Option<String>,
    pub preferences: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserPreferences {
    pub favorite_brands: Vec<String>,
    pub favorite_stores: Vec<String>,
    pub budget_min: Option<f64>,
    pub budget_max: Option<f64>,
    pub preferred_currency: String,
    pub preferred_shipping: Vec<String>,
    pub preferred_payment: Vec<String>,
    pub preferred_categories: Vec<String>,
    pub excluded_brands: Vec<String>,
    pub excluded_stores: Vec<String>,
    pub local_warranty: bool,
    pub location: Option<UserLocation>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserLocation {
    pub country: String,
    pub city: String,
    pub address: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserSession {
    pub id: Uuid,
    pub user_id: Uuid,
    pub token: String,
    pub expires_at: DateTime<Utc>,
    pub created_at: DateTime<Utc>,
}
