pub mod middleware;
pub mod routes;

use axum::{Router, middleware as mw};
use sqlx::PgPool;
use std::sync::Arc;

use crate::core::config::Config;
use crate::core::error::AppError;
use crate::db::repository::*;
use crate::integrations::DummyJsonClient;
use crate::services::AgentOrchestrator;

#[derive(Clone)]
pub struct AppState {
    pub pool: PgPool,
    pub config: Config,
    pub user_repo: UserRepository,
    pub product_repo: ProductRepository,
    pub order_repo: OrderRepository,
    pub supplier_repo: SupplierRepository,
    pub agent_repo: AgentRepository,
    pub orchestrator: Arc<AgentOrchestrator>,
    pub dummy_json: Arc<DummyJsonClient>,
}

impl AppState {
    pub fn new(pool: PgPool, config: Config) -> Self {
        Self {
            user_repo: UserRepository::new(pool.clone()),
            product_repo: ProductRepository::new(pool.clone()),
            order_repo: OrderRepository::new(pool.clone()),
            supplier_repo: SupplierRepository::new(pool.clone()),
            agent_repo: AgentRepository::new(pool.clone()),
            orchestrator: Arc::new(AgentOrchestrator::new(config.clone())),
            dummy_json: Arc::new(DummyJsonClient::new()),
            pool,
            config,
        }
    }
}

pub fn create_router(pool: PgPool, config: Config) -> Router {
    let state = AppState::new(pool, config);

    Router::new()
        .nest("/api/v1", routes::router())
        .with_state(state)
}
