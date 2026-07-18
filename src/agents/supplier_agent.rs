use async_trait::async_trait;
use serde_json::{json, Value};

use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::orchestrator::Agent;

pub struct SupplierAgent;

impl SupplierAgent {
    pub fn new() -> Self {
        Self
    }
}

#[async_trait]
impl Agent for SupplierAgent {
    fn name(&self) -> &str {
        "Supplier Agent"
    }

    fn agent_type(&self) -> AgentType {
        AgentType::Supplier
    }

    async fn process(&self, context: &AgentContext) -> anyhow::Result<AgentOutput> {
        Ok(AgentOutput {
            agent_type: "supplier".into(),
            findings: json!({
                "suppliers": [],
                "top_recommendation": null,
                "summary": format!("Searched for suppliers matching '{}'", context.query)
            }),
            confidence: 0.70,
            recommendations: vec![],
        })
    }
}
