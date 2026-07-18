use anyhow::Result;
use serde_json::Value;

pub struct AlibabaClient {
    api_key: Option<String>,
    client: reqwest::Client,
}

impl AlibabaClient {
    pub fn new(api_key: Option<String>) -> Self {
        Self {
            api_key,
            client: reqwest::Client::new(),
        }
    }

    pub async fn search(&self, query: &str, limit: u32) -> Result<Vec<Value>> {
        if self.api_key.is_none() {
            return Ok(vec![]);
        }
        Ok(vec![])
    }

    pub async fn search_suppliers(&self, category: &str) -> Result<Vec<Value>> {
        Ok(vec![])
    }
}
