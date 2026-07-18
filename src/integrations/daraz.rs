use anyhow::Result;
use serde_json::Value;

pub struct DarazClient;

impl DarazClient {
    pub fn new() -> Self {
        Self
    }

    pub async fn search(&self, query: &str) -> Result<Vec<Value>> {
        Ok(vec![])
    }
}
