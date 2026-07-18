use anyhow::Result;
use async_trait::async_trait;
use serde::{Deserialize, Serialize};
use serde_json::Value;

use crate::core::config::Config;
use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::search_agent::SearchAgent;
use super::price_agent::PriceAgent;
use super::review_agent::ReviewAgent;
use super::recommendation_agent::RecommendationAgent;
use super::comparison_agent::ComparisonAgent;

#[async_trait]
pub trait Agent: Send + Sync {
    fn name(&self) -> &str;
    fn agent_type(&self) -> AgentType;
    async fn process(&self, context: &AgentContext) -> Result<AgentOutput>;
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OrchestratorInput {
    pub query: String,
    pub user_id: Option<String>,
    pub category: Option<String>,
    pub preferred_sources: Option<Vec<String>>,
    pub limit: usize,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OrchestratorOutput {
    pub query: String,
    pub summary: String,
    pub recommendations: Vec<Value>,
    pub agent_outputs: Vec<AgentOutput>,
    pub confidence: f64,
}

pub struct AgentOrchestrator {
    config: Config,
    agents: Vec<Box<dyn Agent>>,
}

impl AgentOrchestrator {
    pub fn new(config: Config) -> Self {
        let agents: Vec<Box<dyn Agent>> = vec![
            Box::new(SearchAgent::new()),
            Box::new(PriceAgent::new()),
            Box::new(ReviewAgent::new()),
            Box::new(ComparisonAgent::new()),
            Box::new(RecommendationAgent::new()),
        ];

        Self { config, agents }
    }

    pub async fn search(&self, input: OrchestratorInput) -> Result<OrchestratorOutput> {
        let context = AgentContext {
            session_id: uuid::Uuid::new_v4(),
            user_id: None,
            query: input.query.clone(),
            user_preferences: None,
            search_results: None,
            conversation_history: vec![],
        };

        let mut outputs = Vec::new();
        for agent in &self.agents {
            let output = agent.process(&context).await?;
            outputs.push(output);
        }

        let recommendation = outputs.iter()
            .find(|o| o.agent_type == "recommendation")
            .or_else(|| outputs.last())
            .cloned();

        let summary = recommendation
            .as_ref()
            .and_then(|r| r.findings.get("summary"))
            .and_then(|s| s.as_str())
            .unwrap_or("")
            .to_string();

        let recs = recommendation
            .as_ref()
            .and_then(|r| r.findings.get("products"))
            .and_then(|p| p.as_array())
            .cloned()
            .unwrap_or_default();

        let confidence = recommendation
            .as_ref()
            .map(|r| r.confidence)
            .unwrap_or(0.0);

        Ok(OrchestratorOutput {
            query: input.query,
            summary,
            recommendations: recs,
            agent_outputs: outputs,
            confidence,
        })
    }

    pub async fn execute(&self, input: OrchestratorInput) -> Result<OrchestratorOutput> {
        self.search(input).await
    }
}
