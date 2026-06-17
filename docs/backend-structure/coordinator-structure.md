# Estrutura Backend: Módulo Coordenador (Coordinator)

## 1. Domain
### Entidades / Agregados
- **Coordinator**: ID, UserId, CompanyId, Specialization, ActiveStatus.

### Regras de Negócio (Domain Rules)
- Um coordenador deve obrigatoriamente estar vinculado a pelo menos uma empresa ativa.
- O coordenador só pode gerenciar escalas de eventos aos quais foi explicitamente atribuído.

## 2. Application
### Casos de Uso (Use Cases)
- `AssignToEvent`: Vincula o coordenador à operação de um evento.
- `ProcessAttendance`: Valida a presença do trabalhador (check-in/out).
- `CloseOperationalScale`: Finaliza a jornada de trabalho de uma equipe.

## 3. Infrastructure
### Adapters
- `JpaCoordinatorRepository`: Persistência JPA.
- `GeofencingService`: Validação de coordenadas GPS vs Local do Evento.

## 4. Presentation
### Endpoints
- `GET /api/v1/coordinators/my-events`
- `POST /api/v1/coordinators/check-in`
- `PATCH /api/v1/coordinators/scales/{id}/close`

## 5. Eventos de Domínio
- `CoordinatorAssigned`: Notificação de novo evento para coordenar.
- `AttendanceValidated`: Presença confirmada no sistema.
