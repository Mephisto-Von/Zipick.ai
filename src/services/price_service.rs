pub struct PriceService;

impl PriceService {
    pub fn new() -> Self {
        Self
    }

    pub fn calculate_buying_score(
        &self,
        current_price: f64,
        average_price: f64,
        lowest_price: f64,
        highest_price: f64,
        rating: f64,
        review_count: i64,
        in_stock: bool,
        free_shipping: bool,
        warranty_months: i32,
    ) -> f64 {
        let mut score = 50.0;

        // Price value score (0-20)
        if average_price > 0.0 {
            let price_ratio = current_price / average_price;
            if price_ratio < 0.8 {
                score += 20.0;
            } else if price_ratio < 0.95 {
                score += 15.0;
            } else if price_ratio < 1.05 {
                score += 10.0;
            } else {
                score += 5.0;
            }
        }

        // Rating score (0-15)
        score += (rating / 5.0) * 15.0;

        // Review count score (0-10)
        if review_count > 1000 {
            score += 10.0;
        } else if review_count > 100 {
            score += 7.0;
        } else if review_count > 10 {
            score += 4.0;
        }

        // Availability score (0-10)
        if in_stock {
            score += 10.0;
        }

        // Shipping score (0-10)
        if free_shipping {
            score += 10.0;
        }

        // Warranty score (0-10)
        score += (warranty_months as f64 / 36.0).min(1.0) * 10.0;

        // Price position score (0-15)
        if highest_price > lowest_price {
            let position = (current_price - lowest_price) / (highest_price - lowest_price);
            score += (1.0 - position) * 15.0;
        }

        score.min(100.0)
    }

    pub fn should_buy_now(
        &self,
        current_price: f64,
        lowest_price: f64,
        predicted_price: Option<f64>,
        days_until_drop: Option<i64>,
    ) -> (bool, String) {
        if let Some(predicted) = predicted_price {
            if predicted < current_price * 0.9 {
                return (false, format!("Price predicted to drop. Consider waiting."));
            }
        }

        if current_price <= lowest_price * 1.05 {
            return (true, "Price is at or near all-time low".into());
        }

        (true, "Price is reasonable".into())
    }
}
