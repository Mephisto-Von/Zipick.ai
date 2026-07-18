# Zipick.ai

**AI Commerce Operating System** — The world's smartest AI-powered shopping, procurement, sourcing, and commerce platform.

[![CI](https://github.com/zipick/zipick/actions/workflows/ci.yml/badge.svg)](https://github.com/zipick/zipick/actions/workflows/ci.yml)
![Rust](https://img.shields.io/badge/rust-1.80+-orange.svg)
![Next.js](https://img.shields.io/badge/next.js-14-black.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

Zipick.ai is an AI-first commerce intelligence platform that helps users discover, compare, evaluate, source, purchase, manage, and track products from anywhere on the internet.

Instead of just listing products, the AI thinks like the world's best buyer — analyzing prices, reviews, alternatives, timing, and trustworthiness before making a recommendation.

## Core Features

- **AI Decision Engine** — Contextual recommendations with buying scores (0-100)
- **Universal Search** — Amazon, Alibaba, eBay, Walmart, local stores, suppliers — unified
- **Multi-Agent AI** — 14 specialized agents: Search, Price, Review, Supplier, Finance, etc.
- **Price Intelligence** — History, predictions, trends, buy-now-or-wait analysis
- **Review Analysis** — Fake review detection, trust scoring, sentiment analysis
- **Business Procurement** — Purchase requests, approvals, POs, RFQs, vendor management
- **Shipment Tracking** — FedEx, UPS, DHL, USPS, local carriers
- **Personal AI Shopper** — Learns preferences, remembers history, improves over time

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Rust + Axum (async, high-performance) |
| Frontend | Next.js 14 + TypeScript + Tailwind CSS |
| Database | PostgreSQL + Redis + Qdrant (vector DB) |
| AI/LLM | OpenAI, Claude, DeepSeek via async-openai |
| Agent Framework | Custom multi-agent orchestrator |
| Infrastructure | Docker, Kubernetes, GitHub Actions |
| Monitoring | Prometheus + Grafana + OpenTelemetry |

## Quick Start

```bash
# Infrastructure
make infra

# Backend (terminal 1)
cargo run

# Frontend (terminal 2)
cd frontend && npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/              Rust backend
├── api/          HTTP routes & middleware
├── core/         Config, error handling
├── models/       Domain models (14 domains)
├── db/           Repository pattern, SQLx migrations
├── agents/       Multi-agent AI system (14 agents)
├── ai/           LLM & embedding clients
├── integrations/ Marketplace API connectors
└── services/     Business logic

frontend/         Next.js app
├── src/app/      Pages (search, compare, AI chat, procurement, auth)
├── src/components/  Design system & layout components
└── src/lib/      API client, utilities

k8s/              Kubernetes manifests
docs/             Architecture, API, roadmap
```

## API

See [docs/API.md](docs/API.md) for full API documentation.

## Roadmap

1. **MVP** ✅ — Core platform, AI agents, search, auth, design system
2. **Core Platform** 🔄 — Marketplace integrations, price prediction, review analysis
3. **Business Edition** — Procurement workflows, approvals, vendor management
4. **Enterprise** — Multi-agent automation, ERP integration, predictive purchasing
5. **Ecosystem** — AI Marketplace, plugins, mobile apps, white-label

## License

MIT
