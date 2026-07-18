use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;

use crate::core::types::Timestamp;

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Order {
    pub id: Uuid,
    pub user_id: Uuid,
    pub status: String,
    pub total: f64,
    pub currency: String,
    pub shipping_address: Option<String>,
    pub billing_address: Option<String>,
    pub tracking_number: Option<String>,
    pub carrier: Option<String>,
    pub estimated_delivery: Option<DateTime<Utc>>,
    pub notes: Option<String>,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OrderItem {
    pub id: Uuid,
    pub order_id: Uuid,
    pub product_id: Uuid,
    pub quantity: i32,
    pub unit_price: f64,
    pub total_price: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct PurchaseOrder {
    pub id: Uuid,
    pub company_id: Uuid,
    pub supplier_id: Uuid,
    pub po_number: String,
    pub status: String,
    pub total: f64,
    pub currency: String,
    pub payment_terms: String,
    pub delivery_date: Option<DateTime<Utc>>,
    pub notes: Option<String>,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ShipmentTracking {
    pub id: Uuid,
    pub order_id: Uuid,
    pub carrier: String,
    pub tracking_number: String,
    pub status: String,
    pub estimated_delivery: Option<DateTime<Utc>>,
    pub current_location: Option<String>,
    pub events: Vec<ShipmentEvent>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ShipmentEvent {
    pub timestamp: DateTime<Utc>,
    pub location: String,
    pub description: String,
    pub status: String,
}
