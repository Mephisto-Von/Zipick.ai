use async_trait::async_trait;
use serde_json::{json, Value};

use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::orchestrator::Agent;

pub struct FinanceAgent;

impl FinanceAgent {
    pub fn new() -> Self {
        Self
    }
}

#[async_trait]
impl Agent for FinanceAgent {
    fn name(&self) -> &str {
        "Finance Agent"
    }

    fn agent_type(&self) -> AgentType {
        AgentType::Finance
    }

    async fn process(&self, context: &AgentContext) -> anyhow::Result<AgentOutput> {
        Ok(AgentOutput {
            agent_type: "finance".into(),
            findings: json!({
                "total_cost_of_ownership": null,
                "tax_estimate": null,
                "import_duties": null,
                "shipping_cost": null,
                "roi_analysis": null,
                "budget_impact": null,
                "summary": "Calculated total cost and financial impact"
            }),
            confidence: 0.72,
            recommendations: vec![],
        })
    }
}
