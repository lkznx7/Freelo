# Projeto: Freelo

**Responsável:**
Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

# Arquitetura Técnica - Freelo

Este documento descreve a arquitetura do projeto Freelo, abrangendo tanto o frontend atual quanto o planejamento para o backend.

## 1. Visão Geral
O Freelo é uma plataforma marketplace para gestão de equipes de eventos, conectando profissionais (Workers) a empresas (Companies).

## 2. Frontend (Estado Atual)
O frontend foi desenvolvido com tecnologias modernas focadas em performance e experiência do usuário.

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS 4
- **Componentes:** Shadcn/UI (Radix UI)
- **Ícones:** Lucide React
- **Gerenciamento de Formulários:** React Hook Form + Zod
- **Animações:** Framer Motion

### Estrutura de Pastas
- `src/app`: Rotas e páginas da aplicação.
- `src/components`: Componentes reutilizáveis (UI e Freelo-specific).
- `src/features`: Lógica de negócio organizada por domínio (auth, jobs, wallet, etc).
- `src/hooks`: Hooks customizados.
- `src/lib`: Utilitários e configurações de terceiros.

## 3. Backend (Planejado)
O backend será construído seguindo princípios de robustez e escalabilidade.

### Tech Stack
- **Linguagem:** Java 17+
- **Framework:** Spring Boot 3.x
- **Arquitetura:** Spring Modulith (Monolito Modular)
- **Banco de Dados:** PostgreSQL
- **Segurança:** Spring Security + JWT
- **Documentação:** OpenAPI 3.0 (Swagger)

### Padrões Arquiteturais
- **Hexagonal Architecture:** Separação clara entre domínio e infraestrutura.
- **DDD (Domain-Driven Design):** Organização baseada em contextos de negócio.
- **Events:** Comunicação entre módulos via eventos internos para garantir o desacoplamento.

## 4. Estratégia de Git
- **Branching:** Git Flow (main, develop, feature/*, release/*).
- **Commits:** Conventional Commits (feat, fix, docs, chore, etc).
