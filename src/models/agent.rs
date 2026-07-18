use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;

use crate::core::types::Timestamp;

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct AgentRun {
    pub id: Uuid,
    pub user_id: Option<Uuid>,
    pub session_id: Option<Uuid>,
    pub agent_type: String,
    pub input: serde_json::Value,
    pub output: Option<serde_json::Value>,
    pub status: String,
    pub duration_ms: Option<i64>,
    pub tokens_used: Option<i64>,
    pub model: Option<String>,
    pub created_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum AgentType {
    Search,
    Recommendation,
    Price,
    Review,
    Supplier,
    Inventory,
    Negotiation,
    Shipment,
    Finance,
    Analytics,
    MarketTrend,
    Comparison,
    Personalization,
    Procurement,
    Orchestrator,
}

impl AgentType {
    pub fn as_str(&self) -> &'static str {
        match self {
            AgentType::Search => "search",
            AgentType::Recommendation => "recommendation",
            AgentType::Price => "price",
            AgentType::Review => "review",
            AgentType::Supplier => "supplier",
            AgentType::Inventory => "inventory",
            AgentType::Negotiation => "negotiation",
            AgentType::Shipment => "shipment",
            AgentType::Finance => "finance",
            AgentType::Analytics => "analytics",
            AgentType::MarketTrend => "market_trend",
            AgentType::Comparison => "comparison",
            AgentType::Personalization => "personalization",
            AgentType::Procurement => "procurement",
            AgentType::Orchestrator => "orchestrator",
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AgentMessage {
    pub from: String,
    pub to: String,
    pub content: serde_json::Value,
    pub metadata: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AgentContext {
    pub session_id: Uuid,
    pub user_id: Option<Uuid>,
    pub query: String,
    pub user_preferences: Option<serde_json::Value>,
    pub search_results: Option<serde_json::Value>,
    pub conversation_history: Vec<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AgentOutput {
    pub agent_type: String,
    pub findings: serde_json::Value,
    pub confidence: f64,
    pub recommendations: Vec<String>,
}
