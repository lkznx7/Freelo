# Estrutura Backend: Módulo Trabalhador (Worker)

## 1. Domain
### Entidades / Agregados
- **Worker**: ID, UserId, Name, CPF, BirthDate, Bio, ProfileImageUrl, AverageRating, TotalJobs.
- **Skill**: ID, Name, Category.
- **Document**: ID, Type (RG, CPF, CNH), FileUrl, Status (PENDING, APPROVED, REJECTED).

### Regras de Negócio (Domain Rules)
- Apenas trabalhadores com documentos aprovados podem se candidatar a vagas pagas.
- O Score (AverageRating) é recalculado a cada nova avaliação recebida.

## 2. Application
### Casos de Uso (Use Cases)
- `UpdateWorkerProfile`: Atualiza dados básicos e bio.
- `UploadDocuments`: Registra documentos para validação.
- `ManageSkills`: Adiciona ou remove especialidades do perfil.
- `GetWorkerStats`: Consolida métricas de desempenho.

## 3. Infrastructure
### Adapters
- `JpaWorkerRepository`: Persistência via JPA.
- `S3StorageAdapter`: Upload de fotos e documentos para nuvem.

## 4. Presentation
### Endpoints
- `GET /api/v1/workers/me`
- `PUT /api/v1/workers/profile`
- `POST /api/v1/workers/documents`

## 5. Eventos de Domínio
- `WorkerProfileUpdated`: Disparado ao alterar dados.
- `DocumentsUploaded`: Disparado para notificar o admin para revisão.
