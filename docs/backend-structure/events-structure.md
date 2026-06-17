# Estrutura Backend: Módulo Eventos (Events)

## 1. Domain
### Entidades / Agregados
- **Event**: ID, CompanyId, Name, Description, Category, StartDate, EndDate, BrandingInfo (JSON).
- **Scale**: ID, EventId, CoordinatorId, StartTime, EndTime, Location.

### Regras de Negócio (Domain Rules)
- A data de início das escalas deve estar dentro do intervalo do evento pai.
- Um evento só pode ser arquivado após a conclusão de todas as suas escalas e pagamentos.

## 2. Application
### Casos de Uso (Use Cases)
- `PlanEvent`: Criação do evento macro.
- `CreateScale`: Definição de turnos e locais específicos.
- `LinkJobToScale`: Associação de vagas a uma escala de evento.
- `GenerateEventReport`: Consolidação de dados operacionais.

## 3. Infrastructure
### Adapters
- `JpaEventRepository`: Persistência JPA.
- `CalendarAdapter`: Integração com calendários externos (opcional).

## 4. Presentation
### Endpoints
- `POST /api/v1/events`
- `GET /api/v1/events/{id}/full-view`
- `POST /api/v1/events/{id}/scales`

## 5. Eventos de Domínio
- `EventPlanned`: Novo evento cadastrado.
- `ScaleCreated`: Novo turno definido.
