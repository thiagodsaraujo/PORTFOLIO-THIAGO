# Rolê Junino — Technical Portfolio

> Digital guide for Paraiba's June festivals. Full-stack platform in production, launched in June 2026.  
> **Role:** Architect and Tech Lead — product conception, architecture, execution orchestration, and operations.

---

## The Problem

June festivals drive major tourism in Paraiba, but information about schedules, attractions, lodging, and local routes was fragmented across social media, city websites, and private messaging groups. Rolê Junino centralizes this into a single mobile-first guide: city-based schedules, live events, venue discovery (bars/restaurants/hotels), and a personalized itinerary builder.

Initial launch coverage: Campina Grande, Cabaceiras, Bananeiras, Patos, and Santa Luzia.

---

## Architecture

`pnpm` monorepo with three packages and end-to-end type safety in TypeScript:

| Package | Responsibility |
|--------|------------------|
| `apps/web` | Next.js 16 / React 19 frontend (SSR + Server Components) |
| `apps/api` | Express 4 / Node 20 API with domain service layer |
| `packages/shared` | Shared TypeScript types + Zod schemas for web and API |

```
Client (Next.js 16 / React 19)
   │  /api/* (proxy rewrite)
   ▼
API (Express 4)  ──  Helmet → CORS → Auth (JWT+RBAC) → Service Layer (21 domains)
   │
   ├── PostgreSQL 16 (Prisma 6, 36 models)
   └── Redis (HTTP cache + BullMQ queues)
```

**Key architecture decisions:**

- **Public vs Admin API split** — public read-only routes with aggressive caching and no auth; admin routes with JWT + RBAC. This reduces attack surface and optimizes each traffic profile.
- **Graceful degradation** — Redis (cache, queues, rate-limit store) is optional. Without Redis, the app falls back to in-memory behavior and remains operational.
- **Server Components by default** — `'use client'` only for interactive boundaries, reducing client-side JS and improving mobile performance.
- **Shared Zod schemas** — one validation source of truth consumed by API runtime and web forms/types.

---

## Engineering Highlights

### Google Places API (New) Integration
A discovery layer that merges curated partners with Google places into one paginated list:
- Async import jobs with BullMQ, including *dry-run* and per-job cost kill switch.
- Photo proxy with streaming + 24h cache under rate limiting.
- Transactional claims flow: business owners can claim and convert places into partners.
- LGPD opt-out flow: public blacklist removal form for legal compliance.

### Intelligent Cache + Invalidation (Redis)
`cacheResponse({ ttlSeconds })` middleware on all public GET endpoints (TTL 60–600s), with normalized cache keys by path + sorted query and `X-Cache: HIT|MISS` response headers. Domain-scoped invalidation (e.g., event updates invalidate only `/eventos*`, `/contexto*`, `/atracoes*`).

### Authentication + RBAC
JWT strategy with 15-minute access tokens + 7-day refresh tokens, bcrypt password hashing, and route-level authorization in three roles (`SUPER_ADMIN` > `ADMIN` > `EDITOR`).

### Queues + Async Processing (BullMQ)
Worker layer for heavy tasks (places import, batch geocoding), decoupled from request/response with dedicated prefixes and structured job logs.

### Load Testing + Scalability (k6)
The platform initially collapsed around **~300-400 concurrent users**. After Redis caching, ISR, edge caching, and rate limiting, estimated capacity increased to **~2-3K concurrent users**, validated through a k6 suite (api-stress, cache-effectiveness, db-pool-saturation, redis-failover, cluster-scaling).

### Observability + Operations
- Structured JSON logs with Pino + pino-http.
- Liveness/readiness health checks (DB + Redis verification).
- Self-hosted Umami analytics (proxied).
- Multi-stage Docker deploy on VPS via Coolify, including `prisma migrate deploy` at startup.
- GitHub Actions CI/CD: PR gate (typecheck, lint, tests with coverage, audit, build) and automatic `dev` → `main` promotion flow.

---

## How It Was Built — Architecture + AI Agent Orchestration

This project was built under an execution model where I acted as an **architect and tech lead orchestrating AI agents** as delivery force multipliers. In practice, this meant operating with the same responsibilities as a lead managing a software team:

- **Defined architecture and core technical decisions** — stack choices, service boundaries, data model, cache strategy, and scalability trade-offs.
- **Authored specs and quality gates** governing execution: mandatory tests for each function/hook/service/endpoint, test-first bug fixing, blocking CI, PR code reviews, import standards, and performance rules.
- **Orchestrated AI agents** within those boundaries, reviewing outputs, correcting direction, and validating deliveries under senior technical supervision.
- **Owned final quality responsibility** — no feature considered done without green tests, target coverage, and end-to-end validation.

The differentiator is not simply "using AI to code", but designing and operating an **AI-assisted engineering workflow** with explicit standards and quality gates, using agents to multiply delivery speed without sacrificing senior-level engineering rigor.

---

## Scale and Metrics

| Metric | Value |
|---------|-------|
| Prisma models (PostgreSQL) | 36 |
| API domain services | 21 |
| Web business components | 86 |
| Custom web hooks | 22 |
| Public cached GET endpoints | 16 |
| Capacity (with Redis cache) | ~2-3K concurrent users |
| Cities covered at launch | 5 |

---

## Stack

**Frontend:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 · shadcn/ui · TanStack Query 5 · React Hook Form · Zod · Framer Motion · Google Maps (@vis.gl)

**Backend:** Node.js 20 · Express 4 · TypeScript 5 · Prisma 6 · PostgreSQL 16 · Redis (ioredis) · BullMQ · JWT · bcrypt · Zod · Pino

**Infra & DevOps:** Docker (multi-stage) · Coolify (VPS) · Cloudflare R2 (S3) · Sharp · GitHub Actions (CI/CD) · k6 (load testing) · Umami (analytics)

**Engineering:** pnpm monorepo · End-to-end type safety · RBAC · Rate limiting · Domain invalidation cache strategy · Graceful degradation · LGPD compliance
