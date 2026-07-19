FROM rust:1.80-slim-bookworm AS builder

RUN apt-get update && apt-get install -y pkg-config libssl-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY Cargo.toml Cargo.lock* ./
COPY src/ src/
RUN mkdir -p .sqlx

RUN cargo build --release --locked

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates openssl && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/target/release/zipick /usr/local/bin/zipick

EXPOSE 8080
CMD ["zipick"]
