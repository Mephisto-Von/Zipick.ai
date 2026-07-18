.PHONY: all build run test clean dev-backend dev-frontend infra db-setup

all: build

# Backend
build:
	cargo build --release

run:
	cargo run --release

dev-backend:
	cargo watch -x run

test:
	cargo test
	cd frontend && npm run build

clean:
	cargo clean
	cd frontend && rm -rf .next node_modules

# Frontend
dev-frontend:
	cd frontend && npm run dev

build-frontend:
	cd frontend && npm run build

# Infrastructure
infra:
	docker compose up -d

infra-down:
	docker compose down

db-setup:
	docker compose exec postgres psql -U zipick -d zipick -f /docker-entrypoint-initdb.d/init.sql

# Kubernetes
k8s-apply:
	kubectl apply -f k8s/

k8s-delete:
	kubectl delete -f k8s/

# Development
dev: infra
	@echo "Starting development environment..."
	@echo "Backend: http://localhost:8080"
	@echo "Frontend: http://localhost:3000"

# Production build
prod:
	docker compose build
	docker compose up -d

# Help
help:
	@echo "Available targets:"
	@echo "  build          Build Rust backend"
	@echo "  run            Run backend server"
	@echo "  dev-backend    Run backend with hot-reload"
	@echo "  dev-frontend   Run frontend dev server"
	@echo "  dev            Start full dev environment"
	@echo "  test           Run all tests"
	@echo "  infra          Start infrastructure services"
	@echo "  prod           Build and start production"
	@echo "  clean          Clean build artifacts"
