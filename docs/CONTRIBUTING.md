# Contributing

## Development Setup

### Prerequisites
- Rust 1.80+
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 16 (via Docker)

### Quick Start

```bash
# 1. Start infrastructure
make infra

# 2. Set up environment
cp .env.example .env
# Edit .env with your API keys

# 3. Run database migrations
# (auto-runs on server start)

# 4. Start backend
cargo run

# 5. Start frontend (in another terminal)
cd frontend && npm run dev
```

## Code Style

### Rust
- Follow Rust 2021 edition idioms
- Use `cargo clippy` before committing
- Write tests for new functionality
- Use `anyhow::Result` for fallible functions
- Prefer `thiserror` for error types

### TypeScript/React
- Use TypeScript strict mode
- Follow Tailwind CSS conventions
- Use ShadCN-style components
- Write functional components with hooks
- Use `cn()` utility for class merging

## Pull Request Process

1. Create a feature branch from `main`
2. Write tests for new features
3. Ensure CI passes (cargo check, cargo test, npm run build)
4. Update documentation if needed
5. Submit PR with clear description

## Architecture Decisions

See [ARCHITECTURE.md](ARCHITECTURE.md) for detailed architecture documentation.

## Project Structure

```
zipick/
├── src/
│   ├── api/        # HTTP routes & middleware
│   ├── core/       # Config, error types, utilities
│   ├── models/     # Domain models
│   ├── db/         # Database repository pattern
│   ├── agents/     # Multi-agent AI system
│   ├── services/   # Business logic services
│   ├── ai/         # LLM & embedding clients
│   └── integrations/ # External API integrations
├── frontend/
│   └── src/
│       ├── app/         # Next.js pages
│       ├── components/  # React components
│       └── lib/         # Utilities & API client
├── k8s/          # Kubernetes manifests
└── docs/         # Documentation
```
