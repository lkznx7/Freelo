# Domain Entities

Detailed specification of domain entities for the Freelo system.

## 1. Worker (Trabalhador)
Represents the professional looking for jobs.
- **Attributes:**
    - `UUID id`
    - `String name`
    - `String cpf` (Unique)
    - `String phone`
    - `UserRole role` (GARÇOM, RECEPCIONISTA, SEGURANÇA, etc.)
    - `Integer xp` (Experience points)
    - `Double rating` (0.0 - 5.0)
    - `Boolean verified`
    - `String bio`
    - `List<String> skills`
- **Business Rules:**
    - Must have a valid CPF to be verified.
    - Rating is calculated based on completed reviews.

## 2. Company (Empresa)
Represents the contractor.
- **Attributes:**
    - `UUID id`
    - `String companyName`
    - `String tradeName`
    - `String cnpj` (Unique)
    - `String responsible`
    - `Integer activeEventsCount`
    - `BigDecimal budgetSpent`
    - `Boolean verified`
- **Business Rules:**
    - CNPJ must be valid.
    - Budget spent is updated automatically upon payment confirmation.

## 3. Event (Evento)
A cluster of jobs organized by a company.
- **Attributes:**
    - `UUID id`
    - `String title`
    - `String location`
    - `LocalDateTime date`
    - `Company company`
    - `EventStatus status` (DRAFT, PUBLISHED, IN_PROGRESS, FINISHED, CANCELLED)
- **Business Rules:**
    - An event can only be finished if all its jobs are finished.

## 4. Job (Serviço/Vaga)
A specific task/role within an event.
- **Attributes:**
    - `UUID id`
    - `String title`
    - `String description`
    - `BigDecimal price` (Value paid to the worker)
    - `Integer totalSpots`
    - `Integer availableSpots`
    - `JobCategory category`
    - `LocalDateTime startTime`
    - `LocalDateTime endTime`
- **Business Rules:**
    - `availableSpots` cannot be negative.
    - Start time must be before end time.

## 5. Application (Candidatura)
The intent of a worker to perform a job.
- **Attributes:**
    - `UUID id`
    - `Worker worker`
    - `Job job`
    - `ApplicationStatus status` (PENDING, ACCEPTED, REJECTED, CANCELLED)
    - `LocalDateTime appliedAt`
- **Business Rules:**
    - A worker cannot apply twice to the same job.
    - When accepted, `availableSpots` of the job decreases.

## 6. Scale (Escala)
The schedule of workers for a specific event/job.
- **Attributes:**
    - `UUID id`
    - `Job job`
    - `List<Worker> workers`
    - `Coordinator coordinator`

## 7. Attendance (Presença)
Record of check-in and check-out.
- **Attributes:**
    - `UUID id`
    - `Worker worker`
    - `Job job`
    - `LocalDateTime checkIn`
    - `LocalDateTime checkOut`
    - `Boolean verifiedByPromoter`
- **Business Rules:**
    - Check-in can only be done within a specific timeframe of the job start.

## 8. Review (Avaliação)
Feedback given by companies to workers and vice-versa.
- **Attributes:**
    - `UUID id`
    - `UUID evaluatorId`
    - `UUID evaluatedId`
    - `Integer rating` (1-5)
    - `String comment`

## 9. Transaction (Transação/Carteira)
Financial records.
- **Attributes:**
    - `UUID id`
    - `UUID userId`
    - `BigDecimal amount`
    - `TransactionType type` (CREDIT, DEBIT)
    - `String pixKey`
    - `TransactionStatus status` (PENDING, COMPLETED, FAILED)

## 10. Notification (Notificação)
System alerts for users.
- **Attributes:**
    - `UUID id`
    - `UUID userId`
    - `String title`
    - `String message`
    - `Boolean read`
    - `LocalDateTime createdAt`
