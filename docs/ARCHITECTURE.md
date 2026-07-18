# Architecture

## Overview

Zipick.ai uses a clean architecture pattern with:

- **Rust Backend** (Axum) — High-performance async API server
- **Next.js Frontend** (React + TypeScript) — Modern, responsive UI
- **PostgreSQL** — Primary database
- **Redis** — Caching and session management
- **Qdrant** — Vector database for semantic search
- **RabbitMQ** — Async task queue for background jobs

## System Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Next.js    │────▶│  Rust API    │────▶│ PostgreSQL  │
│  Frontend   │     │  (Axum)      │     │             │
└─────────────┘     │              │     ├─────────────┤
                    │  ┌────────┐  │     │   Redis     │
┌─────────────┐     │  │Agent   │  │     ├─────────────┤
│  Browser    │────▶│  │Orch.   │──│────▶│   Qdrant    │
│  Extension  │     │  └────────┘  │     ├─────────────┤
└─────────────┘     │              │     │  RabbitMQ   │
                    └──────────────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    │  External   │
                    │  APIs       │
                    │  (Amazon,   │
                    │  Alibaba,   │
                    │  eBay, etc) │
                    └─────────────┘
```

## Multi-Agent System

The AI reasoning engine uses a multi-agent architecture where specialized agents collaborate:

1. **Search Agent** — Queries marketplaces, supplier catalogs, and search engines
2. **Price Agent** — Analyzes historical prices, predicts trends, determines value
3. **Review Agent** — Analyzes reviews, detects fake/spam, calculates trust scores
4. **Quality Agent** — Evaluates reliability, durability, return rates
5. **Supplier Agent** — Discovers and vets suppliers
6. **Inventory Agent** — Checks stock levels and availability
7. **Shipment Agent** — Compares shipping options and tracks deliveries
8. **Finance Agent** — Calculates TCO, taxes, duties, ROI
9. **Negotiation Agent** — Drafts RFQs, quotes, and supplier communications
10. **Recommendation Agent** — Produces final ranked recommendations
11. **Comparison Agent** — Cross-product comparison with AI explanations
12. **Personalization Agent** — Learns user preferences over time

### Agent Communication Flow

```
User Query
    │
    ▼
Orchestrator
    │
    ├──▶ Search Agent ──────▶ External APIs
    ├──▶ Price Agent ───────▶ Price History DB
    ├──▶ Review Agent ──────▶ Review Analysis
    ├──▶ Supplier Agent ────▶ Supplier DB
    ├──▶ Shipment Agent ────▶ Carrier APIs
    └──▶ Finance Agent ─────▶ Tax/Duty APIs
                │
                ▼
    Recommendation Agent
                │
                ▼
    User Response
```

## Domain-Driven Design

The system is organized around business domains:

- **Users** — Authentication, preferences, AI memory
- **Products** — Catalog, pricing, availability
- **Orders** — Consumer orders, tracking
- **Suppliers** — Vendor management, ratings
- **Procurement** — Purchase requests, approvals, POs, RFQs
- **Agents** — AI agent runs, sessions, outputs
- **Inventory** — Stock management, warehouses

## Security Architecture

- Zero-trust network model
- JWT-based authentication with refresh tokens
- RBAC for multi-tenant enterprise features
- API rate limiting per user/IP
- Encrypted secrets via Vault/K8s secrets
- Audit logging for all business operations
- GDPR-compliant data management
