use std::net::SocketAddr;
use tower_http::cors::CorsLayer;
use tower_http::trace::TraceLayer;
use tracing_subscriber::EnvFilter;
use zipick::api::create_router;
use zipick::core::config::Config;
use zipick::core::db::init_pool;
use zipick::core::error::{AppError, AppResult};

#[tokio::main]
async fn main() -> AppResult<()> {
    tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::try_from_default_env().unwrap_or_else(|_| "zipick=info,tower_http=info".into()))
        .init();

    let config = Config::from_env()?;
    let pool = init_pool(&config.database_url).await?;

    sqlx::migrate!("src/db/migrations").run(&pool).await
        .map_err(|e| AppError::Internal(format!("Migration failed: {}", e)))?;
    tracing::info!("Database migrations complete");

    let app = create_router(pool, config.clone())
        .layer(CorsLayer::permissive())
        .layer(TraceLayer::new_for_http());

    let addr = SocketAddr::from(([0, 0, 0, 0], config.port));
    tracing::info!("Zipick.ai server starting on {}", addr);

    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app).await
        .map_err(|e| AppError::Internal(format!("Server error: {}", e)))?;

    Ok(())
}
