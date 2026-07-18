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
use crate::core::types::ApiResponse;

#[derive(Deserialize)]
pub struct SupplierQuery {
    pub category: Option<String>,
    pub country: Option<String>,
    pub verified: Option<bool>,
}

async fn search_suppliers(
    State(state): State<AppState>,
    Query(query): Query<SupplierQuery>,
) -> AppResult<Json<Value>> {
    let suppliers = state.supplier_repo
        .search(query.category.as_deref(), query.country.as_deref())
        .await?;
    Ok(Json(json!(ApiResponse::new(suppliers))))
}

async fn get_supplier(
    State(state): State<AppState>,
    Path(id): Path<Uuid>,
) -> AppResult<Json<Value>> {
    let supplier = state.supplier_repo.find_by_id(id)
        .await?
        .ok_or_else(|| AppError::NotFound("Supplier not found".into()))?;
    Ok(Json(json!(ApiResponse::new(supplier))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/api/v1/suppliers", get(search_suppliers))
        .route("/api/v1/suppliers/{id}", get(get_supplier))
}
