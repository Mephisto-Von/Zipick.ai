use anyhow::Result;
use sqlx::PgPool;
use uuid::Uuid;

use crate::models::agent::AgentRun;

#[derive(Clone)]
pub struct AgentRepository {
    pool: PgPool,
}

impl AgentRepository {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn create_run(&self, run: &AgentRun) -> Result<AgentRun> {
        let r = sqlx::query_as::<_, AgentRun>(
            r#"
            INSERT INTO agent_runs (id, user_id, session_id, agent_type, 
                input, output, status, duration_ms, tokens_used, model)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *
            "#,
        )
        .bind(run.id)
        .bind(run.user_id)
        .bind(run.session_id)
        .bind(&run.agent_type)
        .bind(&run.input)
        .bind(&run.output)
        .bind(&run.status)
        .bind(run.duration_ms)
        .bind(run.tokens_used)
        .bind(&run.model)
        .fetch_one(&self.pool)
        .await?;
        Ok(r)
    }

    pub async fn find_runs_by_session(&self, session_id: Uuid) -> Result<Vec<AgentRun>> {
        let runs = sqlx::query_as::<_, AgentRun>(
            "SELECT * FROM agent_runs WHERE session_id = $1 ORDER BY created_at ASC",
        )
        .bind(session_id)
        .fetch_all(&self.pool)
        .await?;
        Ok(runs)
    }
}
