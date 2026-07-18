use crate::integrations::SearchAggregator;

pub struct SearchService {
    aggregator: SearchAggregator,
}

impl SearchService {
    pub fn new(config: &crate::core::config::Config) -> Self {
        Self {
            aggregator: SearchAggregator::new(
                config.amazon_api_key.clone(),
                config.alibaba_api_key.clone(),
                config.ebay_api_key.clone(),
                None,
                config.google_shopping_api_key.clone(),
            ),
        }
    }

    pub async fn search_universal(&self, query: &str, limit: u32) -> anyhow::Result<Vec<serde_json::Value>> {
        self.aggregator.search_all(query, limit).await
    }
}
