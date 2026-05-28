# Plataforma de Cursos Online (POA)

> Plataforma full-stack de educação online com streaming de vídeo, módulo administrativo completo, gestão de assinaturas e um conjunto de ferramentas assistidas por IA.

![Stack](https://img.shields.io/badge/stack-TypeScript%20%7C%20React%2018%20%7C%20Node%2FExpress%20%7C%20PostgreSQL-blue)
![Status](https://img.shields.io/badge/status-em%20produção-success)

---

## LinkedIn (storytelling)

Construí, sozinho, uma plataforma SaaS de educação online em produção — do schema do banco até o gateway de IA. Aqui está o que aprendi por baixo do capô.

Quando comecei, o desafio parecia simples: “entregar curso em vídeo com painel administrativo”.
No fim do caminho, o que existe hoje é uma aplicação full-stack TypeScript com integração a LLMs, gateway de pagamento por webhooks, geração de PDFs com watermark dinâmico, monitoramento de erros próprio e um sistema de feature flags que me deixa rotacionar funcionalidades sem deploy.

A stack:
React 18 + Vite + TanStack Query no front. Node/Express no back. PostgreSQL com Drizzle ORM. Tailwind + Radix/shadcn no design system. Tudo em TypeScript, com schema compartilhado entre client e server — uma das decisões que mais pagou dividendos: zero drift, validação Zod automática nas duas pontas, refactors sem medo.

As partes que mais me ensinaram:

→ Webhooks de pagamento. Idempotência não é detalhe. Construí deduplicação, reprocessamento manual via admin e cobertura automatizada porque “rodar duas vezes” quebra contabilidade no mundo real.

→ Gateway interno de modelos de IA. Em vez de chamar a OpenAI direto em cada feature, centralizei tudo num gateway configurável. Hoje consigo trocar de modelo por funcionalidade, auditar custo por execução e adicionar novas ferramentas assistidas por LLM sem tocar no resto do sistema.

→ Chatbots context-aware com datasets. Implementei upload e parsing de CSV, XLSX e SPSS para alimentar conversas com contexto real — não só prompt engineering, mas pipeline de dados.

→ Observabilidade caseira. Construí um sistema próprio de captura, agregação e notificação de erros front e back. Quando algo quebra, eu sei antes do usuário reclamar.

→ Geração server-side de PDFs com watermark dinâmico por usuário. Proteção de conteúdo que sobrevive a screenshot social.

→ Feature flags + configuração dinâmica. Quase nada na plataforma é “hardcoded”. Tiers, scoring comportamental, modelos de IA, navegação do admin — tudo configurável em runtime.

O que levo desse projeto:
Construir sozinho ensina onde estão os trade-offs reais. Aprendi que tipagem forte fim-a-fim economiza mais tempo do que qualquer ferramenta de produtividade. Que webhooks merecem o mesmo carinho que endpoints públicos. E que um bom gateway de IA hoje vale mais do que escolher “o melhor modelo”.

Stack: TypeScript · React 18 · Node/Express · PostgreSQL · Drizzle ORM · Tailwind · Radix/shadcn · OpenAI · Object Storage · Vimeo · PDF generation · Webhooks · Zod

#FullStack #TypeScript #React #NodeJS #PostgreSQL #AI #OpenAI #SaaS #EdTech

---

## Visão Geral

Aplicação SaaS desenvolvida do zero (concepção, arquitetura, implementação, deploy e operação) para entregar conteúdo educacional em vídeo, com painel administrativo, sistema de assinaturas, ferramentas analíticas assistidas por IA e geração de certificados.

A plataforma foi construída com foco em:
- **Tipagem fim-a-fim** (schema compartilhado entre front e back).
- **Modularidade** via feature flags e configurações dinâmicas.
- **Observabilidade** (monitoramento de erros, analytics, scoring comportamental).
- **Segurança** (RBAC, rate-limiting, sanitização, watermark dinâmico em PDFs).

---

## Stack

**Frontend**
- React 18 + TypeScript + Vite
- Wouter (routing)
- TanStack Query (data layer)
- Tailwind CSS + Radix UI / shadcn
- React Hook Form + Zod
- React-Quill + DOMPurify

**Backend**
- Node.js + Express + TypeScript
- API REST com validação por schema (Zod)
- Sessões persistidas em PostgreSQL
- Rate-limiting e middlewares de segurança

**Dados & Infra**
- PostgreSQL (serverless) + Drizzle ORM
- Object Storage em nuvem (materiais e uploads)
- Streaming de vídeo via provedor externo
- Pipeline de e-mail transacional (SMTP/API)

**IA**
- OpenAI via gateway interno de modelos
- Chatbots context-aware com anexos (CSV / XLSX / SPSS)
- Geração de código assistida por LLM
- Roteamento e configuração por funcionalidade

---

## Arquitetura

```
┌──────────────┐      ┌────────────────────┐      ┌──────────────┐
│  React SPA   │◄────►│  Express REST API  │◄────►│  PostgreSQL  │
│  TanStack Q  │      │  Zod validation    │      │  Drizzle ORM │
└──────────────┘      └─────────┬──────────┘      └──────────────┘
                                │
        ┌───────────────────────┼────────────────────────┐
        ▼                       ▼                        ▼
  Object Storage         OpenAI Gateway          Webhooks de pagamento
  (uploads/PDFs)         (modelos por feature)   (idempotência + retry)
```

- **Schema único** (`shared/`) gera tipos para client e server.
- **Camada de storage** abstrata, permitindo testes sem banco.
- **Webhooks** com deduplicação e reprocessamento manual.
- **Feature flags** controlam liberação progressiva de funcionalidades.

---

## Funcionalidades Técnicas

### Autenticação & Autorização
- Sessões persistentes em PostgreSQL.
- RBAC (perfis administrativos e de usuário).
- Recuperação de senha por token assinado.
- Verificação de e-mail no cadastro.
- Mecanismo de "dispositivo confiável".
- Rate-limiting em endpoints sensíveis.

### Conteúdo & Mídia
- Streaming de vídeo com player customizado e tracking de progresso/conclusão.
- Upload e organização hierárquica de materiais (object storage).
- Editor rich-text com sanitização HTML.
- Geração server-side de PDFs (relatórios, certificados) com **watermark dinâmico** por usuário.

### Assinaturas & Pagamento
- Tiers configuráveis e plano free com onboarding visual.
- Integração com gateway via **webhooks idempotentes**.
- Importação de base legada (ETL controlado).
- Deduplicação de eventos e reprocessamento manual via admin.

### Camada de IA
- **Gateway interno** que permite trocar/configurar modelos OpenAI por funcionalidade sem alterar código.
- **Chatbot context-aware** com anexos de datasets (CSV, XLSX, SPSS).
- **Gerador de código** assistido por LLM.
- **Ferramentas analíticas** com visualizações interativas e exportação em PDF.
- Logging por execução, controle de custo e roteamento por modelo.

### Painel Administrativo
- CRUD + reordenação de cursos, módulos e conteúdo.
- Navegação customizável e feature flags por área.
- Broadcasts internos e formulário de suporte.
- Gestão de membros, planos e configurações de scoring.

### Observabilidade
- Monitoramento de erros front e back com agregação e deduplicação.
- Estatísticas em tempo real e notificações administrativas.
- Integração com plataforma de analytics comportamental.
- Sincronização de eventos com CRM externo via scoring configurável.

### B2B
- Módulo institucional para gestão de acessos em lote.

---

## Decisões de Engenharia

| Decisão | Por quê |
|---|---|
| Schema único compartilhado | Eliminar drift entre client/server e ter validação Zod automática nas duas pontas. |
| Drizzle ORM | Tipagem forte sem o overhead de ORMs pesados; migrations versionadas. |
| Gateway interno de modelos IA | Trocar modelo por feature sem deploy; auditar custo por execução. |
| Webhooks idempotentes | Pagamentos não toleram retries duplicados; necessário para reprocessamento manual. |
| Feature flags + config dinâmica | Liberar/rotacionar features sem release; testes em produção controlados. |
| RBAC próprio | Granularidade que provedores externos não entregavam para o domínio. |

---

## Stack resumida

`TypeScript` `React 18` `Vite` `TanStack Query` `Tailwind` `Radix/shadcn`
`Node.js` `Express` `Zod` `Drizzle ORM` `PostgreSQL`
`OpenAI` `Object Storage` `PDF generation` `Webhooks`

---

## Sobre

Projeto desenvolvido e mantido por **[Seu Nome]** — concepção, arquitetura, frontend, backend, infra e operação.
