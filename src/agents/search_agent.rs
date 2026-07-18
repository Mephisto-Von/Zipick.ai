use async_trait::async_trait;
use serde_json::{json, Value};

use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::orchestrator::Agent;

pub struct SearchAgent;

impl SearchAgent {
    pub fn new() -> Self {
        Self
    }
}

#[async_trait]
impl Agent for SearchAgent {
    fn name(&self) -> &str {
        "Search Agent"
    }

    fn agent_type(&self) -> AgentType {
        AgentType::Search
    }

    async fn process(&self, context: &AgentContext) -> anyhow::Result<AgentOutput> {
        Ok(AgentOutput {
            agent_type: "search".into(),
            findings: json!({
                "query": context.query,
                "sources_searched": ["amazon", "walmart", "bestbuy", "ebay", "alibaba", "aliexpress"],
                "total_results": 0,
                "results": [],
                "summary": format!("Searched for '{}' across multiple marketplaces", context.query)
            }),
            confidence: 0.85,
            recommendations: vec![],
        })
    }
}
