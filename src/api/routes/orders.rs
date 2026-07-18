use axum::{
    extract::State,
    Json, Router,
    routing::{get, post},
};
use serde_json::{json, Value};

use crate::api::{middleware::auth::AuthenticatedUser, AppState};
use crate::core::error::AppResult;
use crate::core::types::ApiResponse;

async fn list_orders(
    State(state): State<AppState>,
    user: AuthenticatedUser,
) -> AppResult<Json<Value>> {
    let orders = state.order_repo.find_orders_by_user(user.id).await?;
    Ok(Json(json!(ApiResponse::new(orders))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/orders", get(list_orders))
}
