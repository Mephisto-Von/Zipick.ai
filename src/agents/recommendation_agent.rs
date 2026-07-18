use async_trait::async_trait;
use serde_json::{json, Value};

use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::orchestrator::Agent;

pub struct RecommendationAgent;

impl RecommendationAgent {
    pub fn new() -> Self {
        Self
    }
}

#[async_trait]
impl Agent for RecommendationAgent {
    fn name(&self) -> &str {
        "Recommendation Agent"
    }

    fn agent_type(&self) -> AgentType {
        AgentType::Recommendation
    }

    async fn process(&self, context: &AgentContext) -> anyhow::Result<AgentOutput> {
        Ok(AgentOutput {
            agent_type: "recommendation".into(),
            findings: json!({
                "summary": format!(
                    "Based on your requirements for '{}', I've analyzed the options. \
                     The best choice balances price, quality, and your specific needs.",
                    context.query
                ),
                "products": [],
                "buying_score": {
                    "overall": 0,
                    "price_value": 0,
                    "quality": 0,
                    "trust": 0,
                    "shipping": 0,
                    "warranty": 0,
                },
                "ai_confidence": 0.75,
            }),
            confidence: 0.75,
            recommendations: vec![],
        })
    }
}
