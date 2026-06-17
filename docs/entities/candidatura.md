# Candidatura Entity

## Modelo de Dados (Typescript/JSON)

```typescript
interface Application {
  id: string;
  userId: string;
  userName: string;
  userRole: string;
  userRating: number;
  jobId: string;
  jobTitle: string;
  status: 'pending' | 'accepted' | 'rejected' | 'canceled';
  applicationDate: string;
  message?: string;
}
```

## Endpoints de API Esperados

- `POST /api/jobs/{jobId}/apply`: Worker applies for a specific job.
- `GET /api/applications/my`: Returns all applications made by the authenticated worker.
- `GET /api/jobs/{jobId}/applications`: Returns all applications for a specific job (Company only).
- `PATCH /api/applications/{id}/status`: Company accepts or rejects an application.
- `DELETE /api/applications/{id}`: Worker cancels their application.
