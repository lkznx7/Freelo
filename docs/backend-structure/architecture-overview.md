# Estrutura de Backend: Visão Geral

## Padrões Arquiteturais
O sistema segue os princípios da **Clean Architecture**, **DDD (Domain-Driven Design)** e **Arquitetura Hexagonal**.

### Camadas por Módulo
Cada módulo no pacote `com.lkznx7.modules.[modulo]` é dividido em:

1.  **Presentation (API/Web)**: Contém os `Controllers`, `DTOs` e mapeadores para entrada/saída.
2.  **Application (Use Cases)**: Contém os `Services` que orquestram a lógica de negócio e as interfaces de portas (Ports).
3.  **Domain (Core)**: Contém as `Entities`, `Value Objects`, `Domain Services` e `Repositories Interfaces`. **Não possui dependências externas.**
4.  **Infrastructure (Adapters)**: Contém as implementações reais de `Repositories` (JPA/Hibernate), integrações com APIs externas, configurações de segurança e drivers.

## Comunicação entre Módulos
- **Síncrona**: Via injeção de interface (Application Service) para operações simples.
- **Assíncrona**: Via **Domain Events** e um barramento de eventos (Spring Events ou RabbitMQ/Kafka para escala futura).

## Tecnologias Core
- **Linguagem**: Java 21
- **Framework**: Spring Boot 3.x
- **Persistência**: Spring Data JPA / PostgreSQL
- **Segurança**: Spring Security + JWT
- **Documentação**: SpringDoc OpenAPI (Swagger)
