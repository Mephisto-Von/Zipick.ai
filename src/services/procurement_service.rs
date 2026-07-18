use serde_json::Value;

pub struct ProcurementService;

impl ProcurementService {
    pub fn new() -> Self {
        Self
    }

    pub fn generate_rfq(&self, items: &[Value], company_info: &Value) -> Value {
        serde_json::json!({
            "title": "Request for Quotation",
            "items": items,
            "company": company_info,
            "terms": "Net 30",
            "status": "draft"
        })
    }

    pub fn evaluate_supplier_quotes(&self, quotes: &[Value]) -> Vec<(usize, f64)> {
        let mut scored: Vec<(usize, f64)> = quotes.iter().enumerate().map(|(i, q)| {
            let price = q["total"].as_f64().unwrap_or(f64::MAX);
            let delivery = match q["delivery_time"].as_str() {
                Some(d) if d.contains("day") => 10.0,
                Some(d) if d.contains("week") => 5.0,
                _ => 2.0,
            };
            let price_score = (1000.0 / price.max(1.0)).min(100.0);
            (i, price_score * 0.7 + delivery * 0.3)
        }).collect();

        scored.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap_or(std::cmp::Ordering::Equal));
        scored
    }
}
