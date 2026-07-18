use axum::{extract::State, Json, Router, routing::{get, post}};
use serde_json::{json, Value};

use crate::api::AppState;
use crate::core::error::AppResult;
use crate::core::types::ApiResponse;

async fn get_wishlist() -> AppResult<Json<Value>> {
    Ok(Json(json!(ApiResponse::new(Vec::<serde_json::Value>::new()))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/wishlist", get(get_wishlist))
}
