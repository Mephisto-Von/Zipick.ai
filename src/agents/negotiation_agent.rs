use async_trait::async_trait;
use serde_json::{json, Value};

use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::orchestrator::Agent;

pub struct NegotiationAgent;

impl NegotiationAgent {
    pub fn new() -> Self {
        Self
    }
}

#[async_trait]
impl Agent for NegotiationAgent {
    fn name(&self) -> &str {
        "Negotiation Agent"
    }

    fn agent_type(&self) -> AgentType {
        AgentType::Negotiation
    }

    async fn process(&self, context: &AgentContext) -> anyhow::Result<AgentOutput> {
        Ok(AgentOutput {
            agent_type: "negotiation".into(),
            findings: json!({
                "draft_rfq": null,
                "negotiation_strategy": null,
                "suggested_discount": null,
                "summary": "Prepared negotiation strategy for supplier engagement"
            }),
            confidence: 0.65,
            recommendations: vec![],
        })
    }
}
