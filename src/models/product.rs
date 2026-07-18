use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;

use crate::core::types::Timestamp;

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Product {
    pub id: Uuid,
    pub name: String,
    pub description: Option<String>,
    pub category: Option<String>,
    pub brand: Option<String>,
    pub model: Option<String>,
    pub sku: Option<String>,
    pub upc: Option<String>,
    pub ean: Option<String>,
    pub image_url: Option<String>,
    pub product_url: Option<String>,
    pub source: String,
    pub currency: String,
    pub current_price: f64,
    pub average_price: Option<f64>,
    pub lowest_price: Option<f64>,
    pub highest_price: Option<f64>,
    pub predicted_price: Option<f64>,
    pub buying_score: Option<f64>,
    pub rating: Option<f64>,
    pub review_count: Option<i64>,
    pub in_stock: Option<bool>,
    pub free_shipping: Option<bool>,
    pub warranty_months: Option<i32>,
    pub specifications: Option<serde_json::Value>,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductSearch {
    pub query: Option<String>,
    pub category: Option<String>,
    pub brand: Option<String>,
    pub min_price: Option<f64>,
    pub max_price: Option<f64>,
    pub source: Option<String>,
    pub sort_by: Option<String>,
    pub sort_order: Option<String>,
    pub limit: Option<i64>,
    pub offset: Option<i64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductComparison {
    pub products: Vec<Product>,
    pub differences: Vec<ProductDifference>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductDifference {
    pub field: String,
    pub label: String,
    pub values: Vec<Option<String>>,
    pub winner_index: Option<usize>,
    pub explanation: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct ProductPrice {
    pub id: Uuid,
    pub product_id: Uuid,
    pub price: f64,
    pub currency: String,
    pub source: String,
    pub recorded_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BuyingScore {
    pub overall: f64,
    pub price_value: f64,
    pub quality: f64,
    pub warranty: f64,
    pub shipping: f64,
    pub repairability: f64,
    pub longevity: f64,
    pub popularity: f64,
    pub environmental: f64,
    pub review_trust: f64,
    pub ai_confidence: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReviewAnalysis {
    pub trust_score: f64,
    pub genuine_review_count: i64,
    pub fake_review_count: i64,
    pub suspicious_review_count: i64,
    pub summary: String,
    pub sentiment: String,
}
