use anyhow::Result;
use async_openai::{
    Client,
    config::OpenAIConfig,
    types::{
        ChatCompletionRequestMessage, CreateChatCompletionRequestArgs,
        ChatCompletionRequestSystemMessageArgs, ChatCompletionRequestUserMessageArgs,
    },
};

pub struct LLMClient {
    config: OpenAIConfig,
    model: String,
}

impl LLMClient {
    pub fn new(api_key: String) -> Self {
        Self {
            config: OpenAIConfig::new().with_api_key(api_key),
            model: "gpt-4o".into(),
        }
    }

    pub fn with_model(mut self, model: &str) -> Self {
        self.model = model.to_string();
        self
    }

    async fn client(&self) -> Client<OpenAIConfig> {
        Client::with_config(self.config.clone())
    }

    pub async fn chat(&self, system_prompt: &str, user_message: &str) -> Result<String> {
        let request = CreateChatCompletionRequestArgs::default()
            .model(&self.model)
            .messages(vec![
                ChatCompletionRequestMessage::System(
                    ChatCompletionRequestSystemMessageArgs::default()
                        .content(system_prompt)
                        .build()?,
                ),
                ChatCompletionRequestMessage::User(
                    ChatCompletionRequestUserMessageArgs::default()
                        .content(user_message)
                        .build()?,
                ),
            ])
            .build()?;

        let client = self.client().await;
        let response = client.chat().create(request).await?;

        Ok(response
            .choices
            .first()
            .and_then(|c| c.message.content.clone())
            .unwrap_or_default())
    }

    pub async fn analyze_reviews(&self, reviews: &[String]) -> Result<String> {
        let prompt = "You are a review analysis expert. Analyze these product reviews and determine:\n\
            1. What percentage are genuine?\n\
            2. What percentage are fake/paid?\n\
            3. What is the overall sentiment?\n\
            4. Key pros and cons mentioned\n\
            5. Overall trust score (0-100)";

        let reviews_text = reviews.join("\n---\n");
        self.chat(prompt, &reviews_text).await
    }

    pub async fn compare_products(&self, products_json: &str) -> Result<String> {
        let prompt = "You are a product comparison expert. Compare these products and:\n\
            1. Identify the best value for money\n\
            2. Identify the highest quality option\n\
            3. Explain key differences in simple terms\n\
            4. Provide a clear recommendation with reasoning";

        self.chat(prompt, products_json).await
    }

    pub async fn generate_recommendation(&self, context: &str) -> Result<String> {
        let prompt = "You are an expert AI shopping assistant. Based on the user's needs, \
            preferences, and available products, provide:\n\
            1. Your top recommendation with detailed reasoning\n\
            2. Why each alternative was not chosen\n\
            3. Price/value analysis\n\
            4. If they should buy now or wait";

        self.chat(prompt, context).await
    }
}
