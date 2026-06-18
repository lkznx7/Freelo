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

## 3. Backend (8 Módulos MVP)
O backend é construído seguindo os princípios do Spring Modulith, com uma separação clara em 8 módulos de negócio oficiais.

### Módulos Oficiais
1. **Auth:** Autenticação, Autorização e Gestão de Sessão (JWT).
2. **Users:** Gestão de todos os perfis de usuários (Worker, Company, Coordinator, Promoter).
3. **Jobs:** Ciclo de vida de vagas e candidaturas (Applications).
4. **Events:** Gestão de eventos, escalas de trabalho, equipes e coordenação operacional.
5. **Wallet:** Movimentações financeiras, saldo, extrato e integração com pagamentos (PIX).
6. **Chat:** Sistema de mensageria entre os usuários da plataforma.
7. **Notifications:** Sistema de alertas (Push, Email) para eventos críticos.
8. **Reviews:** Gestão de avaliações, reputação e feedbacks mútuos.

### Tech Stack Backend
- **Linguagem:** Java 21
- **Framework:** Spring Boot 3.3.x
- **Arquitetura:** Spring Modulith (Monolito Modular)
- **Banco de Dados:** PostgreSQL / H2 (Dev)
- **Segurança:** Spring Security + JWT
- **Documentação:** OpenAPI 3.0 (Swagger)

## 4. Estratégia de Git
- **Branching:** Git Flow (main, develop, feature/*).
- **Commits:** Conventional Commits (feat, fix, docs, chore, etc).
- **Idioma:** Commits em Português.
