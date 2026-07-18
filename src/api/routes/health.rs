use axum::{routing::get, Json, Router};
use serde_json::{json, Value};

async fn health_check() -> Json<Value> {
    Json(json!({
        "status": "ok",
        "service": "Zipick.ai",
        "version": "0.1.0",
        "timestamp": chrono::Utc::now().to_rfc3339()
    }))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new().route("/health", get(health_check))
}
