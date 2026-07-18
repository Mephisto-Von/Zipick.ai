use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;

use crate::core::types::Timestamp;

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Supplier {
    pub id: Uuid,
    pub name: String,
    pub description: Option<String>,
    pub website: Option<String>,
    pub country: Option<String>,
    pub rating: Option<f64>,
    pub order_count: Option<i64>,
    pub verified: bool,
    pub categories: Option<Vec<String>>,
    pub contact_info: Option<serde_json::Value>,
    pub certifications: Option<Vec<String>>,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SupplierRating {
    pub overall: f64,
    pub quality: f64,
    pub delivery: f64,
    pub communication: f64,
    pub pricing: f64,
    pub count: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RFQ {
    pub id: Uuid,
    pub company_id: Uuid,
    pub title: String,
    pub description: String,
    pub items: Vec<RFQItem>,
    pub status: String,
    pub responses: Vec<RFQResponse>,
    pub deadline: Option<DateTime<Utc>>,
    pub created_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RFQItem {
    pub name: String,
    pub description: String,
    pub quantity: i32,
    pub unit: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RFQResponse {
    pub supplier_id: Uuid,
    pub supplier_name: String,
    pub items: Vec<RFQItemResponse>,
    pub total: f64,
    pub currency: String,
    pub delivery_time: String,
    pub payment_terms: String,
    pub notes: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RFQItemResponse {
    pub name: String,
    pub unit_price: f64,
    pub total_price: f64,
    pub moq: i32,
    pub available: bool,
}
