# Rolê Junino — Portfólio Técnico

> Guia digital das Festas Juninas da Paraíba. Plataforma full-stack em produção, lançada em junho de 2026.  
> **Papel:** Arquiteto e Tech Lead — concepção, arquitetura, orquestração de execução e operação.

---

## O Problema

As Festas Juninas movimentam milhões de turistas na Paraíba, mas a informação sobre programação, atrações, hospedagem e roteiros estava espalhada em redes sociais, prefeituras e grupos de WhatsApp. O Rolê Junino centraliza tudo em um único guia mobile-first: programação por cidade, eventos ao vivo, descoberta de bares/restaurantes/hospedagem e um construtor de roteiros personalizados ("rolês").

Cobertura inicial: Campina Grande, Cabaceiras, Bananeiras, Patos e Santa Luzia.

---

## Arquitetura

Monorepo **pnpm** com três pacotes e type-safety end-to-end em TypeScript:

| Pacote | Responsabilidade |
|--------|------------------|
| `apps/web` | Frontend Next.js 16 / React 19 (SSR + Server Components) |
| `apps/api` | API Express 4 / Node 20, camada de serviços de domínio |
| `packages/shared` | Tipos TypeScript + schemas Zod compartilhados entre web e API |

```
Cliente (Next.js 16 / React 19)
   │  /api/* (proxy rewrite)
   ▼
API (Express 4)  ──  Helmet → CORS → Auth (JWT+RBAC) → Service Layer (21 domínios)
   │
   ├── PostgreSQL 16 (Prisma 6, 36 models)
   └── Redis (cache HTTP + filas BullMQ)
```

**Decisões-chave de arquitetura:**

- **Separação Public vs Admin API** — rotas públicas read-only com cache agressivo e sem auth; rotas admin com JWT + RBAC. Isola superfície de ataque e otimiza cada caminho para seu perfil de carga.
- **Graceful degradation** — Redis (cache, filas, rate-limit store) é opcional: sem ele, a aplicação cai para in-memory e segue funcionando. Zero hard-dependency em infra auxiliar.
- **Server Components por padrão** — `'use client'` só onde há interatividade. Reduz JS no cliente e melhora performance mobile.
- **Schemas Zod no pacote shared** — uma única fonte de verdade de validação, consumida por API (runtime) e web (forms + tipos).

---

## Destaques de Engenharia

### Integração com Google Places API (New)
Camada de descoberta que mescla parceiros curados com estabelecimentos do Google em uma única lista paginada. Inclui:
- **Jobs de import** assíncronos via BullMQ, com *dry-run* e *kill switch* de custo por job.
- **Proxy de fotos** com streaming e cache de 24h, protegido por rate limit.
- **Fluxo de claims** transacional — donos reivindicam o próprio estabelecimento e ele é convertido em parceiro.
- **Opt-out LGPD** — formulário público de remoção (blacklist) para conformidade legal.

### Cache e invalidação inteligente (Redis)
Middleware `cacheResponse({ ttlSeconds })` em todos os endpoints GET públicos (TTL 60–600s), com chaves normalizadas por path + query ordenada e header `X-Cache: HIT|MISS`. Invalidação cirúrgica por domínio (ex.: editar um evento invalida apenas `/eventos*`, `/contexto*`, `/atracoes*`).

### Autenticação e RBAC
JWT com access token de 15min + refresh de 7 dias, senhas com bcrypt. Controle de acesso em três níveis (`SUPER_ADMIN` > `ADMIN` > `EDITOR`) aplicado por rota.

### Filas e processamento assíncrono (BullMQ)
Workers para tarefas pesadas (import de places, geocoding em batch) desacopladas do request-response, com prefixo dedicado e logging de jobs.

### Load testing e escalabilidade (k6)
A aplicação **colapsava em ~300-400 usuários simultâneos**. Implementei cache Redis, ISR, edge caching e rate limiting; a capacidade estimada subiu para **~2-3K usuários simultâneos**, validada com uma suíte k6 (api-stress, cache-effectiveness, db-pool-saturation, redis-failover, cluster-scaling).

### Observabilidade e operação
- Logs estruturados em JSON com Pino + pino-http.
- Health checks de *liveness* e *readiness* (verifica DB + Redis).
- Analytics self-hosted com Umami (proxied).
- Deploy Docker multi-stage em VPS via Coolify, com `prisma migrate deploy` automático no startup.
- CI/CD em GitHub Actions: gate de PR (typecheck, lint, testes com cobertura, audit, build) e promoção automática `dev` → `main`.

---

## Como Foi Construído — Arquitetura + Orquestração de Agentes

Este projeto foi construído sob um modelo de desenvolvimento em que atuei como **arquiteto e tech lead orquestrando agentes de IA** como força de execução. Na prática, isso significou exercer as mesmas responsabilidades de um tech lead que dirige um time:

- **Defini a arquitetura e as decisões técnicas** — escolha de stack, fronteiras de serviço, modelo de dados, estratégia de cache, trade-offs de escalabilidade.
- **Escrevi specs e quality gates** que governaram toda a execução: testes obrigatórios para cada função/hook/serviço/endpoint, *test-first* em correção de bugs, CI bloqueante, code review em todo PR, convenções de import e performance.
- **Orquestrei agentes de IA** para implementar dentro desses limites, revisando, corrigindo direção e validando cada entrega sob supervisão sênior.
- **Mantive a responsabilidade pela qualidade** — nenhuma feature era considerada pronta sem testes verdes, cobertura dentro do alvo e validação ponta-a-ponta.

O diferencial não é "usei IA para programar", e sim ter desenhado e operado um **fluxo de engenharia assistido por IA** — definindo o que construir, os padrões a seguir e os portões de qualidade, e usando agentes como multiplicadores de força para entregar uma plataforma de produção sozinho, sem abrir mão de rigor de engenharia sênior.

---

## Escala e Números

| Métrica | Valor |
|---------|-------|
| Models Prisma (PostgreSQL) | 36 |
| Serviços de domínio (API) | 21 |
| Componentes de negócio (web) | 86 |
| Custom hooks (web) | 22 |
| Endpoints GET públicos com cache | 16 |
| Capacidade (com cache Redis) | ~2-3K usuários simultâneos |
| Cidades cobertas no lançamento | 5 |

---

## Stack

**Frontend:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 · shadcn/ui · TanStack Query 5 · React Hook Form · Zod · Framer Motion · Google Maps (@vis.gl)

**Backend:** Node.js 20 · Express 4 · TypeScript 5 · Prisma 6 · PostgreSQL 16 · Redis (ioredis) · BullMQ · JWT · bcrypt · Zod · Pino

**Infra & DevOps:** Docker (multi-stage) · Coolify (VPS) · Cloudflare R2 (S3) · Sharp · GitHub Actions (CI/CD) · k6 (load testing) · Umami (analytics)

**Engenharia:** Monorepo pnpm · Type-safety end-to-end · RBAC · Rate limiting · Cache com invalidação por domínio · Graceful degradation · Conformidade LGPD
