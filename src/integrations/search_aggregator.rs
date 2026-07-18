use anyhow::Result;
use serde_json::Value;
use std::time::Duration;

use super::amazon::AmazonClient;
use super::alibaba::AlibabaClient;
use super::ebay::EbayClient;
use super::walmart::WalmartClient;
use super::google_shopping::GoogleShoppingClient;
use super::daraz::DarazClient;

pub struct SearchAggregator {
    amazon: AmazonClient,
    alibaba: AlibabaClient,
    ebay: EbayClient,
    walmart: WalmartClient,
    google_shopping: GoogleShoppingClient,
    daraz: DarazClient,
}

impl SearchAggregator {
    pub fn new(
        amazon_key: Option<String>,
        alibaba_key: Option<String>,
        ebay_key: Option<String>,
        walmart_key: Option<String>,
        google_key: Option<String>,
    ) -> Self {
        Self {
            amazon: AmazonClient::new(amazon_key),
            alibaba: AlibabaClient::new(alibaba_key),
            ebay: EbayClient::new(ebay_key),
            walmart: WalmartClient::new(walmart_key),
            google_shopping: GoogleShoppingClient::new(google_key),
            daraz: DarazClient::new(),
        }
    }

    pub async fn search_all(&self, query: &str, limit: u32) -> Result<Vec<Value>> {
        let mut all_results = Vec::new();

        let sources: Vec<(&str, &dyn SearchSource)> = vec![
            ("amazon", &self.amazon as &dyn SearchSource),
            ("walmart", &self.walmart),
            ("ebay", &self.ebay),
            ("aliexpress", &self.alibaba),
            ("google_shopping", &self.google_shopping),
            ("daraz", &self.daraz),
        ];

        for (source_name, source) in &sources {
            match source.search(query, limit).await {
                Ok(results) => {
                    for mut result in results {
                        if let Some(obj) = result.as_object_mut() {
                            obj.insert("source".into(), Value::String(source_name.to_string()));
                        }
                        all_results.push(result);
                    }
                }
                Err(e) => {
                    tracing::warn!("Failed to search {}: {}", source_name, e);
                }
            }
        }

        Ok(all_results)
    }
}

#[async_trait::async_trait]
trait SearchSource: Send + Sync {
    async fn search(&self, query: &str, limit: u32) -> Result<Vec<Value>>;
}

#[async_trait::async_trait]
impl SearchSource for AmazonClient {
    async fn search(&self, query: &str, _limit: u32) -> Result<Vec<Value>> {
        self.search(query, _limit).await
    }
}

#[async_trait::async_trait]
impl SearchSource for AlibabaClient {
    async fn search(&self, query: &str, _limit: u32) -> Result<Vec<Value>> {
        self.search(query, _limit).await
    }
}

#[async_trait::async_trait]
impl SearchSource for EbayClient {
    async fn search(&self, query: &str, _limit: u32) -> Result<Vec<Value>> {
        self.search(query).await
    }
}

#[async_trait::async_trait]
impl SearchSource for WalmartClient {
    async fn search(&self, query: &str, _limit: u32) -> Result<Vec<Value>> {
        self.search(query).await
    }
}

#[async_trait::async_trait]
impl SearchSource for GoogleShoppingClient {
    async fn search(&self, query: &str, _limit: u32) -> Result<Vec<Value>> {
        self.search(query).await
    }
}

#[async_trait::async_trait]
impl SearchSource for DarazClient {
    async fn search(&self, query: &str, _limit: u32) -> Result<Vec<Value>> {
        self.search(query).await
    }
}
