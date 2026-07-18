use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;

use crate::core::types::Timestamp;

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Company {
    pub id: Uuid,
    pub name: String,
    pub tax_id: Option<String>,
    pub industry: Option<String>,
    pub size: Option<String>,
    pub address: Option<String>,
    pub phone: Option<String>,
    pub email: Option<String>,
    pub created_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Department {
    pub id: Uuid,
    pub company_id: Uuid,
    pub name: String,
    pub budget: Option<f64>,
    pub budget_used: Option<f64>,
    pub budget_period: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PurchaseRequest {
    pub id: Uuid,
    pub department_id: Uuid,
    pub requester_id: Uuid,
    pub title: String,
    pub description: String,
    pub items: Vec<PurchaseRequestItem>,
    pub status: String,
    pub approver_id: Option<Uuid>,
    pub approved_at: Option<DateTime<Utc>>,
    pub notes: Option<String>,
    pub created_at: Timestamp,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PurchaseRequestItem {
    pub name: String,
    pub description: String,
    pub quantity: i32,
    pub estimated_unit_price: f64,
    pub total: f64,
    pub preferred_supplier: Option<String>,
    pub urgency: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Invoice {
    pub id: Uuid,
    pub purchase_order_id: Uuid,
    pub supplier_id: Uuid,
    pub invoice_number: String,
    pub amount: f64,
    pub currency: String,
    pub status: String,
    pub due_date: Option<DateTime<Utc>>,
    pub paid_at: Option<DateTime<Utc>>,
    pub line_items: Vec<InvoiceLineItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InvoiceLineItem {
    pub description: String,
    pub quantity: i32,
    pub unit_price: f64,
    pub total: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InventoryItem {
    pub id: Uuid,
    pub product_id: Uuid,
    pub warehouse_id: Uuid,
    pub quantity: i32,
    pub reserved: i32,
    pub available: i32,
    pub reorder_point: i32,
    pub reorder_quantity: i32,
    pub location: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
pub struct Warehouse {
    pub id: Uuid,
    pub company_id: Uuid,
    pub name: String,
    pub location: Option<String>,
    pub capacity: Option<i64>,
    pub used: Option<i64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ApprovalWorkflow {
    pub id: Uuid,
    pub company_id: Uuid,
    pub name: String,
    pub steps: Vec<ApprovalStep>,
    pub rules: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ApprovalStep {
    pub order: i32,
    pub approver_role: String,
    pub min_amount: Option<f64>,
    pub max_amount: Option<f64>,
}
