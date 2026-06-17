# Avaliação Entity

## Modelo de Dados (Typescript/JSON)

```typescript
interface Review {
  id: string;
  value: number; // 0-5
  comment: string;
  reviewerId: string;
  reviewerName: string;
  revieweeId: string;
  eventId: string;
  eventTitle: string;
  date: string;
}
```

## Endpoints de API Esperados

- `POST /api/reviews`: Submits a new review (Worker to Company or vice-versa).
- `GET /api/users/{userId}/reviews`: Returns all reviews received by a worker.
- `GET /api/companies/{companyId}/reviews`: Returns all reviews received by a company.
- `GET /api/events/{eventId}/reviews`: Returns all reviews related to a specific event.
