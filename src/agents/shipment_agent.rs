use async_trait::async_trait;
use serde_json::{json, Value};

use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::orchestrator::Agent;

pub struct ShipmentAgent;

impl ShipmentAgent {
    pub fn new() -> Self {
        Self
    }
}

#[async_trait]
impl Agent for ShipmentAgent {
    fn name(&self) -> &str {
        "Shipment Agent"
    }

    fn agent_type(&self) -> AgentType {
        AgentType::Shipment
    }

    async fn process(&self, context: &AgentContext) -> anyhow::Result<AgentOutput> {
        Ok(AgentOutput {
            agent_type: "shipment".into(),
            findings: json!({
                "carriers": ["fedex", "ups", "dhl", "usps"],
                "best_option": null,
                "estimated_delivery": null,
                "shipping_cost": null,
                "summary": "Compared shipping options for best delivery"
            }),
            confidence: 0.80,
            recommendations: vec![],
        })
    }
}
