use axum::{
    extract::{Query, State},
    Json, Router,
    routing::get,
};
use serde::Deserialize;
use serde_json::{json, Value};
use std::sync::Arc;

use crate::api::AppState;
use crate::core::error::AppResult;
use crate::core::types::ApiResponse;
use crate::agents::orchestrator::OrchestratorInput;
use crate::models::agent::AgentType;

#[derive(Deserialize)]
pub struct SearchQuery {
    pub q: String,
    pub category: Option<String>,
    pub source: Option<String>,
    pub limit: Option<i64>,
}

async fn universal_search(
    State(state): State<AppState>,
    Query(query): Query<SearchQuery>,
) -> AppResult<Json<Value>> {
    let input = OrchestratorInput {
        query: query.q,
        user_id: None,
        category: query.category,
        preferred_sources: query.source.map(|s| vec![s]),
        limit: query.limit.unwrap_or(20) as usize,
    };

    let result = state.orchestrator.search(input).await?;
    Ok(Json(json!(ApiResponse::new(result))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/search", get(universal_search))
}
