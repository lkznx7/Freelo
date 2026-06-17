# Escala Entity

## Modelo de Dados (Typescript/JSON)

```typescript
interface Escala {
  id: string;
  eventId: string;
  staffId: string;
  staffName: string;
  role: 'Coordinator' | 'Promoter' | 'Waiter' | 'Security';
  status: 'confirmed' | 'on_site' | 'finished' | 'absent';
  debt: number; // Current debt/payment for this specific job
  performanceMetrics: {
    punctuality: number; // 0-5
    proactivity: number; // 0-5
    attire: boolean;
  };
}
```

## Endpoints de API Esperados

- `GET /api/events/{eventId}/staff`: Lists all staff members scheduled for an event.
- `POST /api/events/{eventId}/staff/invite`: Invites a specific worker to the event staff.
- `PATCH /api/events/{eventId}/staff/{staffId}`: Updates staff member role or status.
- `DELETE /api/events/{eventId}/staff/{staffId}`: Removes a staff member from the event.
- `GET /api/staff/my-schedule`: Returns the worker's upcoming event schedule.
