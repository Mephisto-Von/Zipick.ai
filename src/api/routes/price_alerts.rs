use axum::{
    extract::State,
    Json, Router,
    routing::{get, post, delete},
};
use serde_json::{json, Value};

use crate::api::AppState;
use crate::core::error::AppResult;
use crate::core::types::ApiResponse;

async fn list_alerts() -> AppResult<Json<Value>> {
    Ok(Json(json!(ApiResponse::new(Vec::<serde_json::Value>::new()))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/api/v1/price-alerts", get(list_alerts))
}
