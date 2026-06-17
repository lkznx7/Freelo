# Notificação Entity

## Modelo de Dados (Typescript/JSON)

```typescript
interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'invite' | 'payment' | 'approval' | 'job' | 'system';
  link?: string; // Action URL
  metadata?: Record<string, any>;
}
```

## Endpoints de API Esperados

- `GET /api/notifications`: Returns all notifications for the authenticated user.
- `PATCH /api/notifications/{id}/read`: Marks a specific notification as read.
- `PATCH /api/notifications/read-all`: Marks all notifications as read.
- `DELETE /api/notifications/{id}`: Deletes a specific notification.
- `DELETE /api/notifications`: Clears all notifications.
