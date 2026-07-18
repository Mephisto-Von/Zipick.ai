use anyhow::Result;
use serde::Deserialize;

#[derive(Clone, Deserialize, Debug)]
pub struct Config {
    pub port: u16,
    pub database_url: String,
    pub redis_url: String,
    pub qdrant_url: String,
    pub rabbitmq_url: String,
    pub jwt_secret: String,
    pub openai_api_key: String,
    pub claude_api_key: Option<String>,
    pub deepseek_api_key: Option<String>,
    pub tavily_api_key: Option<String>,
    pub serpapi_api_key: Option<String>,
    pub amazon_api_key: Option<String>,
    pub alibaba_api_key: Option<String>,
    pub ebay_api_key: Option<String>,
    pub google_shopping_api_key: Option<String>,
    pub environment: String,
}

impl Config {
    pub fn from_env() -> Result<Self> {
        dotenvy::dotenv().ok();

        let cfg = config::Config::builder()
            .set_default("port", 8080)?
            .set_default("environment", "development")?
            .add_source(config::Environment::default().separator("__"))
            .build()?;

        Ok(cfg.try_deserialize()?)
    }

    pub fn is_production(&self) -> bool {
        self.environment == "production"
    }
}
