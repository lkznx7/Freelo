# Estrutura Backend: Módulo Vagas (Jobs)

## 1. Domain
### Entidades / Agregados
- **Job**: ID, CompanyId, Title, Description, Status (DRAFT, OPEN, FILLED, IN_PROGRESS, COMPLETED, CANCELLED), HourlyRate, TotalVacancies, Requirements (JSON), StartDate, EndDate, Location.
- **Application**: ID, JobId, WorkerId, Status (PENDING, APPROVED, REJECTED, WITHDRAWN), AppliedAt.

### Regras de Negócio (Domain Rules)
- Uma vaga não pode ser fechada (FILLED) sem que o número de aplicações aprovadas seja igual ao `TotalVacancies`.
- Trabalhadores não podem se candidatar a vagas com horários sobrepostos.

## 2. Application
### Casos de Uso (Use Cases)
- `CreateJob`: Publicação de nova oportunidade.
- `SubmitApplication`: Candidatura do trabalhador.
- `SelectCandidate`: Aprovação/Reprovação de candidatos.
- `UpdateJobStatus`: Transição de estados da vaga.

## 3. Infrastructure
### Adapters
- `JpaJobRepository`: Persistência JPA.
- `JobMatchingService`: Algoritmo de sugestão de vagas baseado em skills.

## 4. Presentation
### Endpoints
- `POST /api/v1/jobs`
- `GET /api/v1/jobs/search`
- `POST /api/v1/jobs/{id}/apply`

## 5. Eventos de Domínio
- `JobPublished`: Nova vaga disponível.
- `ApplicationReceived`: Notificação para o coordenador/empresa.
- `JobStatusChanged`: Notificação para todos os candidatos envolvidos.
