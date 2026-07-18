use anyhow::Result;
use sqlx::PgPool;
use uuid::Uuid;

use crate::models::supplier::{Supplier, SupplierRating};

#[derive(Clone)]
pub struct SupplierRepository {
    pool: PgPool,
}

impl SupplierRepository {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn create(&self, supplier: &Supplier) -> Result<Supplier> {
        let s = sqlx::query_as::<_, Supplier>(
            r#"
            INSERT INTO suppliers (id, name, description, website, 
                country, rating, order_count, verified, categories)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *
            "#,
        )
        .bind(supplier.id)
        .bind(&supplier.name)
        .bind(&supplier.description)
        .bind(&supplier.website)
        .bind(&supplier.country)
        .bind(supplier.rating)
        .bind(supplier.order_count)
        .bind(supplier.verified)
        .bind(&supplier.categories)
        .fetch_one(&self.pool)
        .await?;
        Ok(s)
    }

    pub async fn find_by_id(&self, id: Uuid) -> Result<Option<Supplier>> {
        let s = sqlx::query_as::<_, Supplier>("SELECT * FROM suppliers WHERE id = $1")
            .bind(id)
            .fetch_optional(&self.pool)
            .await?;
        Ok(s)
    }

    pub async fn search(&self, category: Option<&str>, country: Option<&str>) -> Result<Vec<Supplier>> {
        let mut sql = String::from("SELECT * FROM suppliers WHERE 1=1");
        let mut params: Vec<String> = vec![];

        if let Some(cat) = category {
            params.push(format!(" AND categories @> ARRAY['{}']", cat));
        }
        if let Some(c) = country {
            params.push(format!(" AND country = '{}'", c));
        }

        sql.push_str(&params.join(""));
        sql.push_str(" ORDER BY rating DESC, order_count DESC LIMIT 50");

        let suppliers = sqlx::query_as::<_, Supplier>(&sql)
            .fetch_all(&self.pool)
            .await?;
        Ok(suppliers)
    }
}
