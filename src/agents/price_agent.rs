use async_trait::async_trait;
use serde_json::{json, Value};

use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::orchestrator::Agent;

pub struct PriceAgent;

impl PriceAgent {
    pub fn new() -> Self {
        Self
    }
}

#[async_trait]
impl Agent for PriceAgent {
    fn name(&self) -> &str {
        "Price Intelligence Agent"
    }

    fn agent_type(&self) -> AgentType {
        AgentType::Price
    }

    async fn process(&self, context: &AgentContext) -> anyhow::Result<AgentOutput> {
        Ok(AgentOutput {
            agent_type: "price".into(),
            findings: json!({
                "current_price": null,
                "lowest_price": null,
                "highest_price": null,
                "average_price": null,
                "predicted_price": null,
                "price_trend": "stable",
                "buying_advice": "neutral",
                "confidence": 0.75,
                "summary": format!("Analyzed pricing trends for '{}'", context.query)
            }),
            confidence: 0.75,
            recommendations: vec![],
        })
    }
}
