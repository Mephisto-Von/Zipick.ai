use axum::{
    extract::State,
    Json, Router,
    routing::{get, post},
};
use serde::Deserialize;
use serde_json::{json, Value};
use uuid::Uuid;

use crate::api::AppState;
use crate::core::error::AppResult;
use crate::core::types::ApiResponse;
use crate::models::agent::AgentRun;

#[derive(Debug, Deserialize)]
pub struct AgentQuery {
    pub query: String,
    pub agent_type: Option<String>,
}

async fn execute_agent(
    State(state): State<AppState>,
    Json(input): Json<AgentQuery>,
) -> AppResult<Json<Value>> {
    let orchestrator_input = crate::agents::orchestrator::OrchestratorInput {
        query: input.query,
        user_id: None,
        category: None,
        preferred_sources: None,
        limit: 10,
    };

    let result = state.orchestrator.execute(orchestrator_input).await?;
    Ok(Json(json!(ApiResponse::new(result))))
}

async fn list_agent_runs(
    State(_state): State<AppState>,
) -> AppResult<Json<Value>> {
    Ok(Json(json!(ApiResponse::new(Vec::<AgentRun>::new()))))
}

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .route("/agents/execute", post(execute_agent))
        .route("/agents/runs", get(list_agent_runs))
}
