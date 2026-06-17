# Domain Events

List of domain events used for inter-module communication within the Spring Modulith application.

| Event Name | Trigger | Target Module(s) | Description |
| :--- | :--- | :--- | :--- |
| `WorkerRegisteredEvent` | New worker signs up. | Notification, Profile | Triggers welcome email and profile initialization. |
| `JobPublishedEvent` | Company publishes a new job. | Notification, Search | Notifies relevant workers in the region. |
| `ApplicationSubmittedEvent` | Worker applies for a job. | Notification, Company | Notifies the company of a new candidate. |
| `ApplicationAcceptedEvent` | Company accepts an application. | Scale, Notification | Adds worker to the event scale and notifies the worker. |
| `AttendanceCheckedInEvent` | Worker performs check-in. | Attendance, Wallet | Starts the working period record. |
| `AttendanceVerifiedEvent` | Promoter verifies attendance. | Wallet, Notification | Triggers the payment process to the worker's wallet. |
| `PaymentCompletedEvent` | Payment successfully processed. | Financial, Notification | Updates user balance and sends confirmation. |
| `ReviewSubmittedEvent` | A review is posted. | Profile, Reputation | Updates the average rating of the evaluated entity. |
| `EventCancelledEvent` | Event is cancelled. | Notification, Scale, Wallet | Triggers refunds (if applicable) and notifies all involved. |

### Event Payload Structure (Example)
All events should inherit from a base `DomainEvent` class.

```java
public record JobPublishedEvent(
    UUID jobId,
    String title,
    BigDecimal price,
    String location,
    LocalDateTime startTime
) implements DomainEvent {}
```

### Communication Mechanism
- **Spring ApplicationEvents:** Synchronous or asynchronous using `@EventListener` or `@TransactionalEventListener`.
- **Modulith Event Publication Registry:** Ensures event delivery even in case of failures.
