# Traceability Matrix

Relationship between Frontend Screens, Use Cases, Backend Endpoints, and Domain Entities.

| Screen (Frontend) | Use Case | Backend Endpoint | Primary Entity |
| :--- | :--- | :--- | :--- |
| `/login` | User Authentication | `POST /api/auth/login` | User |
| `/dashboard` (Worker) | View Earnings & Nearby Jobs | `GET /api/workers/dashboard` | Worker, Job |
| `/company/dashboard` | View Event Stats | `GET /api/companies/dashboard` | Company, Event |
| `/jobs` | Search & Filter Jobs | `GET /api/jobs` | Job |
| `/jobs/[id]` | View Job Details | `GET /api/jobs/{id}` | Job, Company |
| `/jobs/[id]` (Apply) | Apply for Job | `POST /api/applications` | Application |
| `/company/events/create`| Create New Event | `POST /api/events` | Event, Job |
| `/wallet` | View Balance & PIX | `GET /api/wallet` | Transaction |
| `/profile` | Manage Profile Data | `GET/PUT /api/users/profile`| User, Worker |
| `/notifications` | View System Alerts | `GET /api/notifications` | Notification |
| `/company/workers` | Search Talent | `GET /api/workers/search` | Worker |
| `/attendance` (QR Scan)| Check-in/Check-out | `POST /api/attendance` | Attendance |

### Workflow Mapping
- **Hiring Flow:** `/jobs` -> `GET /api/jobs/{id}` -> `POST /api/applications` -> `PUT /api/applications/{id}/status` (Company) -> `POST /api/scales`.
- **Payment Flow:** `POST /api/attendance/verify` -> `POST /api/wallet/transactions` -> `GET /api/wallet`.
