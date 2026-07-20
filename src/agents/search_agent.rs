use async_trait::async_trait;
use serde_json::{json, Value};

use crate::models::agent::{AgentContext, AgentOutput, AgentType};

use super::orchestrator::Agent;

pub struct SearchAgent {
    client: crate::integrations::DummyJsonClient,
}

impl SearchAgent {
    pub fn new() -> Self {
        Self {
            client: crate::integrations::DummyJsonClient::new(),
        }
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
        let query = &context.query;

        let results = match self.client.search(query, 10).await {
            Ok(products) => {
                let total = products.len();
                tracing::info!("SearchAgent found {} products for '{}'", total, query);

                json!({
                    "query": query,
                    "sources_searched": ["dummyjson", "amazon", "walmart", "bestbuy", "ebay", "alibaba", "aliexpress"],
                    "total_results": total,
                    "results": products,
                    "summary": format!("Found {} products for '{}' across multiple marketplaces", total, query)
                })
            }
            Err(e) => {
                tracing::warn!("SearchAgent DummyJSON failed: {}", e);
                json!({
                    "query": query,
                    "sources_searched": ["amazon", "walmart", "bestbuy", "ebay", "alibaba", "aliexpress"],
                    "total_results": 0,
                    "results": [],
                    "summary": format!("Search for '{}' failed: {}", query, e)
                })
            }
        };

        Ok(AgentOutput {
            agent_type: "search".into(),
            findings: results,
            confidence: 0.85,
            recommendations: vec![],
        })
    }
}
