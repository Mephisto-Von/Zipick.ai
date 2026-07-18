use axum::{extract::{Path, State}, Json, Router, routing::get};
use serde_json::{json, Value};

use crate::api::AppState;
use crate::core::error::{AppError, AppResult};
use crate::core::types::ApiResponse;

async fn track_shipment(
    Path(tracking_number): Path<String>,
) -> AppResult<Json<Value>> {
    Ok(Json(json!(ApiResponse::new(serde_json::json!({
        "tracking_number": tracking_number,
        "carrier": "auto-detected",
        "status": "in_transit",
    })))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/api/v1/tracking/{tracking_number}", get(track_shipment))
}
