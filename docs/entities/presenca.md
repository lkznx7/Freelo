# Presença Entity

## Modelo de Dados (Typescript/JSON)

```typescript
interface Attendance {
  id: string;
  eventId: string;
  userId: string;
  checkInTime: string; // ISO String
  checkOutTime?: string; // ISO String
  locationStatus: 'on_site' | 'off_site';
  status: 'Present' | 'Late' | 'Absent';
  verifiedBy?: string; // Coordinator ID
}
```

## Endpoints de API Esperados

- `POST /api/attendance/check-in`: Registers worker arrival at the event (with geolocation).
- `POST /api/attendance/check-out`: Registers worker departure.
- `GET /api/events/{eventId}/attendance`: Returns attendance report for a specific event.
- `PATCH /api/attendance/{id}/verify`: Coordinator manually verifies a worker's presence.
