use async_trait::async_trait;
use serde_json::{json, Value};

use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::orchestrator::Agent;

pub struct ComparisonAgent;

impl ComparisonAgent {
    pub fn new() -> Self {
        Self
    }
}

#[async_trait]
impl Agent for ComparisonAgent {
    fn name(&self) -> &str {
        "Comparison Agent"
    }

    fn agent_type(&self) -> AgentType {
        AgentType::Comparison
    }

    async fn process(&self, context: &AgentContext) -> anyhow::Result<AgentOutput> {
        Ok(AgentOutput {
            agent_type: "comparison".into(),
            findings: json!({
                "comparisons": [],
                "best_value": null,
                "best_quality": null,
                "summary": format!("Compared alternatives for '{}'", context.query)
            }),
            confidence: 0.80,
            recommendations: vec![],
        })
    }
}
