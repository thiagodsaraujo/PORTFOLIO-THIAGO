# Research Nova - Analise para Portfolio

URL analisada: https://researchnova.replit.app/

Data da analise: 2026-05-29

Periodo informado para portfolio: `08-2024 - 10-2025`.

Papel confirmado: Desenvolvimento com LLM, com foco em arquitetura de software, qualidade, seguranca e entrega de produto.

Foco confirmado para narrativa: tomadas de decisao arquiteturais, qualidade, seguranca e desenvolvimento.

## Evidencias capturadas

- Landing page completa: `docs/assets/researchnova/researchnova-home-full.png`
- Tela de login: `docs/assets/researchnova/researchnova-login.png`
- Tela de cadastro: `docs/assets/researchnova/researchnova-register.png`
- Features habilitadas via API publica: `docs/assets/researchnova/platform-features-enabled.json`

## Posicionamento do produto

Research Nova e uma plataforma academica com IA para acelerar producao cientifica. A landing comunica tres frentes principais:

- revisao e melhoria textual academica;
- traducao tecnica/cientifica;
- apoio estatistico e gerenciamento de pesquisas.

Headline observada:

> Acelere Sua Pesquisa com Inteligencia Artificial

Subheadline observada:

> Inteligencia artificial de ponta para revisao e traducao textual, procedimentos estatisticos e gerenciamento de pesquisas cientificas.

## Recursos identificados

### Escrita academica e revisao

Features publicas habilitadas:

- `writing_assistant`: Assistente de Escrita.
- `document_review_stylistic`: Revisao Estilistica.
- `document_review_orthographic`: Revisao Ortografica.

Descricoes observadas:

- assistente IA para auxiliar redacao de textos cientificos e academicos;
- analise e melhoria de estilo, clareza e coesao textual;
- revisao automatica de ortografia, gramatica e normas ABNT.

### Traducao academica

Feature publica habilitada:

- `document_review_translation`: Traducao Academica.

Descricao observada:

- traducao de textos academicos com preservacao de terminologia tecnica.

### Estatistica aplicada a pesquisa

Features publicas habilitadas:

- `analysis_classification`: Classificador de Analise.
- `effect_size_calculators`: Calculadoras de Tamanho de Efeito.

Descricoes observadas:

- classificacao automatica do tipo de analise estatistica em pesquisas;
- calculadoras estatisticas para Cohen's d, Hedge's g, Eta-quadrado, Omega-quadrado e outros.

Na landing, a promessa visual e de um guia interativo que indica passo a passo o teste estatistico mais adequado para a pesquisa e variaveis.

### Gestao de pesquisas

Feature publica habilitada:

- `research_management`: Gerenciamento de Pesquisas.

Descricao observada:

- sistema de organizacao e gestao de projetos de pesquisa.

Na landing, a mensagem e organizar pesquisas, documentos e analises em projetos estruturados e colaborativos.

### Autenticacao e onboarding

Fluxos visiveis sem login:

- login por e-mail ou nome de usuario + senha;
- recuperacao de senha;
- cadastro gratuito com nome completo, e-mail, nome de usuario, senha, confirmacao de senha;
- verificacao de nome de usuario;
- codigo de desconto opcional;
- aceite de Termos de Uso e Politica de Privacidade;
- banner de consentimento de cookies com aceitar todos, personalizar e apenas necessarios.

## Modelo comercial observado

A landing apresenta:

- CTA de cadastro gratuito sem cartao;
- plano Free;
- plano Premium;
- secao "Escolha o Plano Ideal";
- CTA final "Comecar Agora Mesmo".

## Indicadores comunicados na landing

Numeros exibidos publicamente:

- 10K+ documentos analisados;
- 1000+ pesquisadores ativos na plataforma;
- 98% precisao nos resultados;
- 50x mais rapido que revisoes humanas.

## Observacoes tecnicas publicamente inferiveis

O que foi observado sem acesso ao codigo-fonte privado:

- SPA React carregada por bundle `/assets/index-DBESTpVS.js`;
- CSS em `/assets/index-BrDvZZ8E.css`;
- API publica `/api/platform-features/enabled` para feature flags/recursos habilitados;
- contexto de autenticacao consultando `/api/user`;
- usuario nao autenticado recebe `401` em `/api/user`, comportamento esperado;
- logs indicam `AuthContext`, `ProcessingContext` e `FeatureContext`;
- prefetch de fluxo de autenticacao;
- processamento de parametros OAuth via query string no HTML inicial;
- unregister de Service Worker no bootstrap;
- uma tentativa de preload de CSS `/src/styles/landing.css` falha por MIME type incorreto, registrada no console.

## Possivel enquadramento no portfolio

Titulo sugerido:

Research Nova - AI Research Platform

Tipo:

AI SaaS / Academic Research Platform

Papel sugerido:

LLM Development & Software Architecture na Solinov Tecnologia, com foco em decisoes arquiteturais, seguranca, quality gates e execucao de produto.

Periodo sugerido:

08-2024 - 10-2025.

Resumo curto:

Plataforma academica com IA para revisao textual, traducao tecnica, classificacao estatistica, calculadoras de tamanho de efeito e gestao de projetos de pesquisa.

Pontos fortes para vender no portfolio:

- produto real e publico;
- dominio complexo: pesquisa academica, escrita cientifica e estatistica;
- IA aplicada a workflows concretos, nao apenas chatbot generico;
- feature flags/recursos habilitados por API;
- autenticacao, onboarding e planos comerciais;
- preocupacao com LGPD/termos/privacidade/cookies;
- experiencia de produto SaaS com landing, auth, free/premium e painel autenticado.

## Conteudo candidato para card

Categoria:

AI SaaS

Titulo:

Research Nova

Descricao:

Academic AI platform for document review, technical translation, statistical analysis guidance, effect size calculators, and research project management.

Badges sugeridas:

`AI SaaS` `LLM Dev` `Architecture` `Security` `Quality`

## Gaps para confirmar antes de publicar

- Stack real usada no projeto.
- Seu escopo exato: frontend, backend, integrações de IA, autenticação, estatística, pagamentos, deploy, manutenção.
- Se trabalhou como colaborador direto da Solinov ou contratado.
- Se pode citar Solinov e Research Nova publicamente no portfolio.
- Se os indicadores comerciais da landing podem ser replicados no seu portfolio.
- Stack real usada no projeto, para evitar inferencia alem do que foi observado publicamente.
