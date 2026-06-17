# Roadmap: Migration to Microservices

Strategy for evolving the Freelo Spring Modulith monolith into a distributed microservices architecture.

## Phase 1: Modular Monolith (Current)
- **Objective:** Establish clear boundaries using Spring Modulith.
- **Key Actions:**
    - Strict package encapsulation.
    - Use of internal events for cross-module communication.
    - Single database with logical separation (schemas).

## Phase 2: Decoupled Data
- **Objective:** Separate data ownership per module.
- **Key Actions:**
    - Move each module's tables to their own database schema.
    - Eliminate cross-module database joins.
    - Replace direct repository calls with internal API/service calls.

## Phase 3: Vertical Slicing
- **Objective:** Extract independent services.
- **Microservices Candidates:**
    1. **Identity Service:** Auth, RBAC, User profiles.
    2. **Job Service:** Events, Jobs, Search, Applications.
    3. **Attendance Service:** Check-in/out, Real-time verification.
    4. **Financial Service:** Wallet, Transactions, PIX integration.
    5. **Notification Service:** Email, SMS, Push notifications.

## Phase 4: Distributed Infrastructure
- **Objective:** Full microservices deployment.
- **Key Actions:**
    - Implement **API Gateway** (Spring Cloud Gateway).
    - Service Discovery (Eureka/Consul).
    - Distributed Tracing (Jaeger/Zipkin).
    - External Message Broker (RabbitMQ/Kafka) replacing internal Spring Events.
    - Centralized Configuration (Spring Cloud Config).

## Why Microservices?
- **Scalability:** Scale the Job Service independently during peak event seasons.
- **Fault Tolerance:** A failure in the Review Service won't stop Workers from checking into Jobs.
- **Deployment Independence:** Teams can deploy updates to the Financial Service without affecting the rest of the system.
