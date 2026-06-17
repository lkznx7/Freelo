# Branching Model - Official Structure

This document details the purpose and dependencies of the official repository branches.

| Branch | Purpose | Scope | Dependency | Status |
| :--- | :--- | :--- | :--- | :--- |
| `main` | Production Baseline | Stable MVP | None | Active |
| `develop` | Development Baseline | Unstable/Integration | `main` | Active |
| `feature/auth` | Authentication System | JWT, Login, Register | `develop` | Pending |
| `feature/worker-module` | Worker Dashboard & Profile | Worker-specific logic | `develop` | Pending |
| `feature/company-module` | Company Dashboard & Staff MGMT | Company-specific logic | `develop` | Pending |
| `feature/jobs-module` | Job Marketplace | Posting and Search | `develop` | Pending |
| `feature/events-module` | Event Execution | Check-in, Status | `develop` | Pending |
| `feature/wallet-module` | Financial System | PIX, Balance, Ledger | `develop` | Pending |
| `feature/chat-module` | Real-time Communication | Messaging | `develop` | Pending |
| `feature/notifications-module` | System Alerts | Push, Web, Email | `develop` | Pending |
| `docs/architecture` | Architectural Specs | Diagrams, Patterns | `develop` | Active |
| `docs/openapi` | API Documentation | YAML, Swagger | `develop` | Active |
| `docs/backend-planning` | Spring Boot Setup | Modules, Entities | `develop` | Active |
| `release/v1.0.0` | MVP Release | Production Prep | `develop` | Planned |

## Branch Creation Logic
- **Historical alignment:** Branches point to the relevant evolution stage of the project.
- **Isolation:** Features are developed in isolation before being integrated into `develop`.
