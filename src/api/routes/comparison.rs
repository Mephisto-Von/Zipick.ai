use axum::{
    extract::{Query, State},
    Json, Router,
    routing::get,
};
use serde::Deserialize;
use serde_json::{json, Value};

use crate::api::AppState;
use crate::core::error::AppResult;
use crate::core::types::ApiResponse;
use crate::models::product::ProductComparison;

#[derive(Deserialize)]
pub struct CompareQuery {
    pub ids: String,
}

async fn compare_products(
    State(state): State<AppState>,
    Query(query): Query<CompareQuery>,
) -> AppResult<Json<Value>> {
    let ids: Vec<uuid::Uuid> = query.ids
        .split(',')
        .filter_map(|s| uuid::Uuid::parse_str(s.trim()).ok())
        .collect();

    let mut products = Vec::new();
    for id in &ids {
        if let Some(p) = state.product_repo.find_by_id(*id).await? {
            products.push(p);
        }
    }

    Ok(Json(json!(ApiResponse::new(ProductComparison {
        products,
        differences: vec![],
    }))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/api/v1/compare", get(compare_products))
}
