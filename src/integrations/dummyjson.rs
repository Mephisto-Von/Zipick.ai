use anyhow::Result;
use reqwest::Client;
use serde::Deserialize;
use serde_json::{json, Value};

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct DummyJsonProduct {
    id: u64,
    title: String,
    description: String,
    category: String,
    price: f64,
    discount_percentage: f64,
    rating: f64,
    stock: i64,
    brand: Option<String>,
    sku: Option<String>,
    thumbnail: Option<String>,
    images: Option<Vec<String>>,
    tags: Option<Vec<String>>,
    shipping_information: Option<String>,
    availability_status: Option<String>,
    warranty_information: Option<String>,
    return_policy: Option<String>,
    weight: Option<f64>,
    dimensions: Option<DummyJsonDimensions>,
}

#[derive(Debug, Deserialize, serde::Serialize)]
struct DummyJsonDimensions {
    width: f64,
    height: f64,
    depth: f64,
}

#[derive(Debug, Deserialize)]
struct DummyJsonResponse {
    products: Vec<DummyJsonProduct>,
    total: u64,
}

pub struct DummyJsonClient {
    client: Client,
    base_url: String,
}

impl DummyJsonClient {
    pub fn new() -> Self {
        Self {
            client: Client::new(),
            base_url: "https://dummyjson.com".to_string(),
        }
    }

    pub async fn search(&self, query: &str, limit: u32) -> Result<Vec<Value>> {
        let url = format!(
            "{}/products/search?q={}&limit={}",
            self.base_url,
            urlencoding::encode(query),
            limit
        );

        let resp = self.client
            .get(&url)
            .timeout(std::time::Duration::from_secs(10))
            .send()
            .await?;

        if !resp.status().is_success() {
            anyhow::bail!("DummyJSON returned status {}", resp.status());
        }

        let data: DummyJsonResponse = resp.json().await?;

        let results: Vec<Value> = data.products.into_iter().map(|p| {
            let image = p.thumbnail
                .or_else(|| p.images.as_ref().and_then(|imgs| imgs.first().cloned()))
                .unwrap_or_default();

            let discounted_price = if p.discount_percentage > 0.0 {
                p.price * (1.0 - p.discount_percentage / 100.0)
            } else {
                p.price
            };

            let free_shipping = p.shipping_information
                .as_deref()
                .map(|s| s.to_lowercase().contains("free"))
                .unwrap_or(false);

            let in_stock = p.availability_status
                .as_deref()
                .map(|s| !s.to_lowercase().contains("out of stock"))
                .unwrap_or(p.stock > 0);

            let tags = p.tags.unwrap_or_default();
            let source_map = tags.iter().find_map(|t| {
                let lower = t.to_lowercase();
                match lower.as_str() {
                    "amazon" => Some("Amazon"),
                    "walmart" => Some("Walmart"),
                    "bestbuy" | "best buy" => Some("BestBuy"),
                    "ebay" => Some("eBay"),
                    "alibaba" | "aliexpress" => Some("AliExpress"),
                    _ => None,
                }
            });
            let source = source_map.unwrap_or("Online").to_string();

            json!({
                "id": p.id.to_string(),
                "name": p.title,
                "description": p.description,
                "category": capitalize_words(&p.category),
                "brand": p.brand.unwrap_or_default(),
                "current_price": (discounted_price * 100.0).round() / 100.0,
                "average_price": p.price,
                "lowest_price": (discounted_price * 0.9 * 100.0).round() / 100.0,
                "highest_price": p.price,
                "source": source,
                "currency": "USD",
                "rating": p.rating,
                "review_count": 0,
                "in_stock": in_stock,
                "free_shipping": free_shipping,
                "image_url": image,
                "buying_score": calculate_buying_score(p.rating, p.discount_percentage, in_stock),
                "specifications": json!({
                    "sku": p.sku,
                    "weight": p.weight,
                    "dimensions": p.dimensions,
                    "warranty": p.warranty_information,
                    "return_policy": p.return_policy,
                    "shipping": p.shipping_information,
                }),
            })
        }).collect();

        Ok(results)
    }

    pub async fn get_categories(&self) -> Result<Vec<String>> {
        let url = format!("{}/products/category-list", self.base_url);
        let resp = self.client
            .get(&url)
            .timeout(std::time::Duration::from_secs(10))
            .send()
            .await?;

        let cats: Vec<String> = resp.json().await?;
        Ok(cats.into_iter().map(|c| capitalize_words(&c)).collect())
    }
}

fn capitalize_words(s: &str) -> String {
    s.split_whitespace()
        .map(|word| {
            let mut chars = word.chars();
            match chars.next() {
                None => String::new(),
                Some(c) => c.to_uppercase().to_string() + &chars.as_str().to_lowercase(),
            }
        })
        .collect::<Vec<_>>()
        .join(" ")
}

fn calculate_buying_score(rating: f64, discount: f64, in_stock: bool) -> f64 {
    let mut score = 0.0;
    score += (rating / 5.0) * 40.0;
    score += (discount / 50.0).min(1.0) * 30.0;
    if in_stock {
        score += 20.0;
    } else {
        score += 5.0;
    }
    score += 10.0;
    (score * 10.0).round() / 10.0
}
