use crate::agents::orchestrator::{AgentOrchestrator as Orchestrator, OrchestratorInput, OrchestratorOutput};
use crate::core::config::Config;

pub struct AgentOrchestrator {
    inner: Orchestrator,
}

impl AgentOrchestrator {
    pub fn new(config: Config) -> Self {
        Self {
            inner: Orchestrator::new(config),
        }
    }

    pub async fn search(&self, input: OrchestratorInput) -> anyhow::Result<OrchestratorOutput> {
        self.inner.search(input).await
    }

    pub async fn execute(&self, input: OrchestratorInput) -> anyhow::Result<OrchestratorOutput> {
        self.inner.execute(input).await
    }
}
