use anyhow::Result;
use serde_json::Value;

pub struct EbayClient {
    api_key: Option<String>,
}

impl EbayClient {
    pub fn new(api_key: Option<String>) -> Self {
        Self { api_key }
    }

    pub async fn search(&self, query: &str) -> Result<Vec<Value>> {
        Ok(vec![])
    }
}
