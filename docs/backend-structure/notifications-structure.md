# Backend Module: Notifications Structure

## Application Layer
- **Use Cases:**
  - `SendNotificationUseCase`: Orchestrates the creation and delivery of alerts.
  - `MarkNotificationAsReadUseCase`: Updates the status of a specific alert.
  - `ClearUserNotificationsUseCase`: Removes or archives notifications for a user.
- **DTOs:**
  - `NotificationDTO`, `NotificationRequest`, `ReadNotificationRequest`.

## Domain Layer
- **Entities:**
  - `Notification`: Aggregate root with `title`, `message`, `type`, `status` (READ, UNREAD), `recipientId`.
- **Value Objects:**
  - `NotificationType` (Enum: INVITE, PAYMENT, SYSTEM, CHAT).
- **Events:**
  - `NotificationSentEvent`.
- **Repository Interface:**
  - `NotificationRepository`.

## Infrastructure Layer
- **Persistence:**
  - `JpaNotificationRepository`: Spring Data JPA implementation.
- **Messaging:**
  - `PushNotificationService`: Integration with FCM or OneSignal.
  - `EmailService`: Integration with SES or SendGrid.

## Presentation Layer
- **Controllers:**
  - `NotificationController`: Endpoints for fetching, reading, and deleting notifications.
- **Mappers:**
  - `NotificationMapper`: Domain to DTO mapping.
