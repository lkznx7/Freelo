# Technical Architecture: Spring Boot Backend

This document describes the architectural patterns and principles applied in the Freelo (Escala Fácil) backend.

## Architectural Patterns

The project follows a combination of modern architectural patterns to ensure maintainability, scalability, and testability.

### 1. Clean Architecture & Hexagonal Architecture
The system is designed with a clear separation between business logic and infrastructure concerns.
- **Domain Layer (Core):** Contains entities, value objects, and domain rules. It has no dependencies on external frameworks or libraries.
- **Application Layer:** Contains use cases and service interfaces. Orchestrates the flow of data to and from the domain.
- **Infrastructure Layer:** Implements adapters for databases, external APIs, and messaging systems.
- **API Layer (Interface):** REST controllers and DTOs that handle HTTP requests and responses.

### 2. Domain-Driven Design (DDD)
The codebase is organized around business domains rather than technical layers. Each module represents a bounded context.
- **Ubiquitous Language:** Terminology used in code (Worker, Job, Scale) matches the business language.
- **Aggregates:** Clusters of domain objects treated as a single unit (e.g., Job and its Applications).

### 3. Spring Modulith
We use **Spring Modulith** to enforce modularity within a single monolith application.
- Each top-level package under `com.lkznx7.escalafacil.modules` is treated as a separate module.
- Modularization prevents tight coupling and facilitates the transition to microservices if needed.
- Events are used for inter-module communication to maintain decoupling.

## SOLID Principles
- **S**ingle Responsibility: Each class has one reason to change.
- **O**pen/Closed: Entities and services are open for extension but closed for modification.
- **L**iskov Substitution: Interfaces are used to allow interchangeable implementations (e.g., different payment gateways).
- **I**nterface Segregation: Specific interfaces are created for specific client needs.
- **D**ependency Inversion: High-level modules do not depend on low-level modules; both depend on abstractions.

## Technology Stack
- **Java 17+**
- **Spring Boot 3.x**
- **Spring Data JPA** (PostgreSQL)
- **Spring Security** (JWT)
- **Spring Modulith**
- **Lombok**
- **MapStruct** (for DTO mapping)
