mod health;
mod auth;
mod products;
mod search;
mod users;
mod orders;
mod procurement;
mod suppliers;
mod agents;
mod comparison;
mod price_alerts;
mod wishlist;
mod tracking;

use axum::{Router, middleware};

pub fn router() -> Router<crate::api::AppState> {
    Router::new()
        .merge(health::router())
        .merge(auth::router())
        .merge(products::router())
        .merge(search::router())
        .merge(users::router())
        .merge(orders::router())
        .merge(procurement::router())
        .merge(suppliers::router())
        .merge(agents::router())
        .merge(comparison::router())
        .merge(price_alerts::router())
        .merge(wishlist::router())
        .merge(tracking::router())
}
