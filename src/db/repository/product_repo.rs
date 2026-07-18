use anyhow::Result;
use sqlx::PgPool;
use uuid::Uuid;

use crate::models::product::{Product, ProductSearch, ProductPrice};

#[derive(Clone)]
pub struct ProductRepository {
    pool: PgPool,
}

impl ProductRepository {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn create(&self, product: &Product) -> Result<Product> {
        let p = sqlx::query_as::<_, Product>(
            r#"
            INSERT INTO products (id, name, description, category, brand, model, 
                sku, upc, ean, image_url, product_url, source, currency, 
                current_price, average_price, lowest_price, highest_price,
                predicted_price, buying_score, rating, review_count, 
                in_stock, free_shipping, warranty_months)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,
                $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)
            RETURNING *
            "#,
        )
        .bind(product.id)
        .bind(&product.name)
        .bind(&product.description)
        .bind(&product.category)
        .bind(&product.brand)
        .bind(&product.model)
        .bind(&product.sku)
        .bind(&product.upc)
        .bind(&product.ean)
        .bind(&product.image_url)
        .bind(&product.product_url)
        .bind(&product.source)
        .bind(&product.currency)
        .bind(product.current_price)
        .bind(product.average_price)
        .bind(product.lowest_price)
        .bind(product.highest_price)
        .bind(product.predicted_price)
        .bind(product.buying_score)
        .bind(product.rating)
        .bind(product.review_count)
        .bind(product.in_stock)
        .bind(product.free_shipping)
        .bind(product.warranty_months)
        .fetch_one(&self.pool)
        .await?;
        Ok(p)
    }

    pub async fn find_by_id(&self, id: Uuid) -> Result<Option<Product>> {
        let p = sqlx::query_as::<_, Product>("SELECT * FROM products WHERE id = $1")
            .bind(id)
            .fetch_optional(&self.pool)
            .await?;
        Ok(p)
    }

    pub async fn search(&self, query: &ProductSearch) -> Result<Vec<Product>> {
        let mut sql = String::from("SELECT * FROM products WHERE 1=1");
        let mut params: Vec<String> = vec![];

        if let Some(q) = &query.query {
            params.push(format!(
                " AND (name ILIKE '%{}%' OR description ILIKE '%{}%' OR brand ILIKE '%{}%')",
                q, q, q
            ));
        }
        if let Some(cat) = &query.category {
            params.push(format!(" AND category = '{}'", cat));
        }
        if let Some(brand) = &query.brand {
            params.push(format!(" AND brand = '{}'", brand));
        }
        if let Some(min) = query.min_price {
            params.push(format!(" AND current_price >= {}", min));
        }
        if let Some(max) = query.max_price {
            params.push(format!(" AND current_price <= {}", max));
        }
        if let Some(source) = &query.source {
            params.push(format!(" AND source = '{}'", source));
        }

        sql.push_str(&params.join(""));
        sql.push_str(" ORDER BY buying_score DESC NULLS LAST");

        let limit = query.limit.unwrap_or(20).min(100);
        let offset = query.offset.unwrap_or(0);
        sql.push_str(&format!(" LIMIT {} OFFSET {}", limit, offset));

        let products = sqlx::query_as::<_, Product>(&sql)
            .fetch_all(&self.pool)
            .await?;
        Ok(products)
    }

    pub async fn get_price_history(&self, product_id: Uuid, days: i32) -> Result<Vec<ProductPrice>> {
        let prices = sqlx::query_as::<_, ProductPrice>(
            r#"
            SELECT * FROM product_prices 
            WHERE product_id = $1 AND recorded_at >= NOW() - $2::interval
            ORDER BY recorded_at ASC
            "#,
        )
        .bind(product_id)
        .bind(format!("{} days", days))
        .fetch_all(&self.pool)
        .await?;
        Ok(prices)
    }
}
