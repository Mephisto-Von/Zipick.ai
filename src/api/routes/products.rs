use axum::{
    extract::{Path, Query, State},
    Json, Router,
    routing::get,
};
use serde::Deserialize;
use serde_json::{json, Value};
use uuid::Uuid;

use crate::api::AppState;
use crate::core::error::{AppError, AppResult};
use crate::core::types::{ApiResponse, Pagination};
use crate::models::product::ProductSearch;

#[derive(Deserialize)]
pub struct ProductQuery {
    pub query: Option<String>,
    pub category: Option<String>,
    pub brand: Option<String>,
    pub min_price: Option<f64>,
    pub max_price: Option<f64>,
    pub source: Option<String>,
    pub sort_by: Option<String>,
    pub limit: Option<i64>,
    pub page: Option<i64>,
}

async fn get_product(
    State(state): State<AppState>,
    Path(id): Path<Uuid>,
) -> AppResult<Json<Value>> {
    tracing::info!("get_product called with id: {}", id);
    let product = state.product_repo.find_by_id(id)
        .await?
        .ok_or_else(|| AppError::NotFound("Product not found".into()))?;

    Ok(Json(json!(ApiResponse::new(product))))
}

async fn search_products(
    State(state): State<AppState>,
    Query(query): Query<ProductQuery>,
) -> AppResult<Json<Value>> {
    let page = query.page.unwrap_or(1).max(1);
    let limit = query.limit.unwrap_or(20).min(100);

    let search = ProductSearch {
        query: query.query,
        category: query.category,
        brand: query.brand,
        min_price: query.min_price,
        max_price: query.max_price,
        source: query.source,
        sort_by: query.sort_by,
        sort_order: None,
        limit: Some(limit),
        offset: Some((page - 1) * limit),
    };

    let products = state.product_repo.search(&search).await?;
    let total = products.len() as i64;

    Ok(Json(json!(ApiResponse::paginated(
        products,
        Pagination {
            page,
            per_page: limit,
            total,
        }
    ))))
}

async fn get_price_history(
    State(state): State<AppState>,
    Path(id): Path<Uuid>,
) -> AppResult<Json<Value>> {
    let prices = state.product_repo.get_price_history(id, 90).await?;
    Ok(Json(json!(ApiResponse::new(prices))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/products", get(search_products))
        .route("/products/:id", get(get_product))
        .route("/products/:id/prices", get(get_price_history))
}
