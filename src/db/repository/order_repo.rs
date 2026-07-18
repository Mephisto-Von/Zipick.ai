use anyhow::Result;
use sqlx::PgPool;
use uuid::Uuid;

use crate::models::order::{Order, OrderItem, PurchaseOrder};

#[derive(Clone)]
pub struct OrderRepository {
    pool: PgPool,
}

impl OrderRepository {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn create_order(&self, order: &Order) -> Result<Order> {
        let o = sqlx::query_as::<_, Order>(
            r#"
            INSERT INTO orders (id, user_id, status, total, currency, 
                shipping_address, billing_address, tracking_number,
                carrier, estimated_delivery, notes)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING *
            "#,
        )
        .bind(order.id)
        .bind(order.user_id)
        .bind(&order.status)
        .bind(order.total)
        .bind(&order.currency)
        .bind(&order.shipping_address)
        .bind(&order.billing_address)
        .bind(&order.tracking_number)
        .bind(&order.carrier)
        .bind(order.estimated_delivery)
        .bind(&order.notes)
        .fetch_one(&self.pool)
        .await?;
        Ok(o)
    }

    pub async fn find_orders_by_user(&self, user_id: Uuid) -> Result<Vec<Order>> {
        let orders = sqlx::query_as::<_, Order>(
            "SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC",
        )
        .bind(user_id)
        .fetch_all(&self.pool)
        .await?;
        Ok(orders)
    }

    pub async fn create_purchase_order(&self, po: &PurchaseOrder) -> Result<PurchaseOrder> {
        let p = sqlx::query_as::<_, PurchaseOrder>(
            r#"
            INSERT INTO purchase_orders (id, company_id, supplier_id, status,
                total, currency, payment_terms, delivery_date, notes)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *
            "#,
        )
        .bind(po.id)
        .bind(po.company_id)
        .bind(po.supplier_id)
        .bind(&po.status)
        .bind(po.total)
        .bind(&po.currency)
        .bind(&po.payment_terms)
        .bind(po.delivery_date)
        .bind(&po.notes)
        .fetch_one(&self.pool)
        .await?;
        Ok(p)
    }
}
