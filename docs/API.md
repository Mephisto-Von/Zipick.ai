# API Documentation

Base URL: `http://localhost:8080/api/v1`

## Authentication

### Register
`POST /auth/register`
```json
{ "email": "user@example.com", "password": "securepass", "name": "John Doe" }
```

### Login
`POST /auth/login`
```json
{ "email": "user@example.com", "password": "securepass" }
```

Response:
```json
{ "token": "jwt...", "user_id": "uuid", "email": "...", "name": "...", "role": "consumer" }
```

## Search

### Universal Search
`GET /search?q=gaming+laptop&category=electronics&source=amazon&limit=20`

## Products

### List Products
`GET /products?query=&category=&brand=&min_price=&max_price=&source=&page=1&limit=20`

### Get Product
`GET /products/{id}`

### Price History
`GET /products/{id}/prices`

### Compare Products
`GET /compare?ids=uuid1,uuid2,uuid3`

## AI Agents

### Execute Agent
`POST /agents/execute`
```json
{ "query": "best gaming laptop under $1200", "agent_type": "orchestrator" }
```

## Suppliers

### Search Suppliers
`GET /suppliers?category=electronics&country=china&verified=true`

### Get Supplier
`GET /suppliers/{id}`

## Orders (Authenticated)

### List Orders
`GET /orders`

## Procurement (Authenticated)

### Purchase Orders
`GET /procurement/purchase-orders`
`POST /procurement/purchase-orders`

### RFQs
`POST /procurement/rfqs`

## User (Authenticated)

### Profile
`GET /users/me`

### Preferences
`GET /users/me/preferences`

## Price Alerts

### List Alerts
`GET /price-alerts`

## Wishlist

### Get Wishlist
`GET /wishlist`

## Shipment Tracking

### Track Shipment
`GET /tracking/{tracking_number}`

## Health

### Health Check
`GET /health`
```json
{ "status": "ok", "service": "Zipick.ai", "version": "0.1.0" }
```

## Error Format

All errors follow:
```json
{ "error": "Description of what went wrong" }
```

HTTP status codes:
- 200 — Success
- 400 — Bad Request
- 401 — Unauthorized
- 403 — Forbidden
- 404 — Not Found
- 409 — Conflict
- 429 — Rate Limited
- 500 — Internal Server Error
