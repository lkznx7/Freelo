# Conceptual Data Model

Description of the database schema and entity relationships.

## Entity Relationship Diagram (Conceptual)

### Core Relationships
- **User (1) <---> (1) Worker:** A user account can be associated with one worker profile.
- **User (1) <---> (1) Company:** A user account can be associated with one company profile.
- **Company (1) <--- (N) Event:** A company can organize multiple events.
- **Event (1) <--- (N) Job:** An event consists of multiple jobs/roles.
- **Job (1) <--- (N) Application:** Multiple workers can apply for the same job.
- **Worker (1) <--- (N) Application:** A worker can apply for multiple jobs.
- **Job (1) <--- (1) Scale:** A job has one associated scale (list of confirmed workers).
- **Worker (N) <---> (M) Scale:** Confirmed workers are part of the scale.
- **Worker (1) <--- (N) Attendance:** A worker has many attendance records (one per job).
- **Job (1) <--- (N) Attendance:** Many workers have attendance records for a single job.
- **User (1) <--- (N) Transaction:** A user (Worker or Company) has many financial transactions.
- **User (1) <--- (N) Notification:** A user receives many notifications.

### Cardinality Summary
| Source Entity | Target Entity | Cardinality | Type |
| :--- | :--- | :---: | :---: |
| Company | Event | 1:N | Composition |
| Event | Job | 1:N | Composition |
| Worker | Application | 1:N | Association |
| Job | Application | 1:N | Association |
| Job | Attendance | 1:N | Association |
| Worker | Attendance | 1:N | Association |
| Evaluator (User) | Review | 1:N | Association |
| Evaluated (User) | Review | 1:N | Association |

## Table Specifications (Primary Keys & Foreign Keys)

### Table: `users`
- `id` (PK)
- `email` (Unique)
- `password`
- `role`

### Table: `workers`
- `id` (PK)
- `user_id` (FK -> users.id)
- `cpf` (Unique)

### Table: `companies`
- `id` (PK)
- `user_id` (FK -> users.id)
- `cnpj` (Unique)

### Table: `events`
- `id` (PK)
- `company_id` (FK -> companies.id)

### Table: `jobs`
- `id` (PK)
- `event_id` (FK -> events.id)

### Table: `applications`
- `id` (PK)
- `worker_id` (FK -> workers.id)
- `job_id` (FK -> jobs.id)

### Table: `attendances`
- `id` (PK)
- `worker_id` (FK -> workers.id)
- `job_id` (FK -> jobs.id)
