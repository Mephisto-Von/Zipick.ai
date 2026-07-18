use anyhow::Result;
use serde_json::Value;

pub struct GoogleShoppingClient {
    api_key: Option<String>,
}

impl GoogleShoppingClient {
    pub fn new(api_key: Option<String>) -> Self {
        Self { api_key }
    }

    pub async fn search(&self, query: &str) -> Result<Vec<Value>> {
        Ok(vec![])
    }
}
