use anyhow::Result;
use async_openai::{Client, config::OpenAIConfig};
use async_openai::types::CreateEmbeddingRequestArgs;

pub struct EmbeddingService {
    config: OpenAIConfig,
    model: String,
}

impl EmbeddingService {
    pub fn new(api_key: String) -> Self {
        Self {
            config: OpenAIConfig::new().with_api_key(api_key),
            model: "text-embedding-3-small".into(),
        }
    }

    async fn client(&self) -> Client<OpenAIConfig> {
        Client::with_config(self.config.clone())
    }

    pub async fn embed(&self, text: &str) -> Result<Vec<f64>> {
        let request = CreateEmbeddingRequestArgs::default()
            .model(&self.model)
            .input(text)
            .build()?;

        let client = self.client().await;
        let response = client.embeddings().create(request).await?;
        let embedding = response
            .data
            .first()
            .map(|d| d.embedding.iter().map(|&v| v as f64).collect())
            .unwrap_or_default();

        Ok(embedding)
    }

    pub async fn embed_batch(&self, texts: &[&str]) -> Result<Vec<Vec<f64>>> {
        let mut embeddings = Vec::new();
        for text in texts {
            embeddings.push(self.embed(text).await?);
        }
        Ok(embeddings)
    }
}
