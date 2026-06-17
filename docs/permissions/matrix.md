# Permissions Matrix (RBAC)

This matrix defines the access levels for each role in the Freelo system.

| Feature / Action | WORKER | COMPANY | COORDINATOR | PROMOTER | ADMIN |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Profile** | | | | | |
| View own profile | Read | Read | Read | Read | Read |
| Edit own profile | Write | Write | Write | Write | Write |
| View public profiles | Read | Read | Read | Read | Read |
| **Jobs / Events** | | | | | |
| View available jobs | Read | - | Read | Read | Read |
| Apply to jobs | Write | - | - | - | - |
| Create/Edit events | - | Write | - | - | Write |
| Cancel own events | - | Write | - | - | Write |
| **Applications** | | | | | |
| View own applications| Read | - | - | - | - |
| Manage applications | - | Write | Write | - | Write |
| **Scale / Attendance** | | | | | |
| View own schedule | Read | - | - | - | - |
| View event scale | - | Read | Read | Read | Read |
| Edit scale | - | Write | Write | - | Write |
| Verify presence | - | - | - | Write | Write |
| **Financial** | | | | | |
| View own balance | Read | Read | Read | Read | Read |
| Request withdrawal | Write | - | Write | Write | Write |
| Approve payments | - | Write | - | - | Write |
| **System** | | | | | |
| Manage users | - | - | - | - | Write |
| View audit logs | - | - | - | - | Read |
| Global settings | - | - | - | - | Write |

### Legend:
- **Read:** Can view information.
- **Write:** Can create, update, or delete information.
- **-:** No access.
