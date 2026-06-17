# Security Specification

Technical specification for security measures in the Freelo backend.

## 1. Authentication & Authorization

### JWT (JSON Web Token)
- **Algorithm:** RS256 (RSA Signature with SHA-256)
- **Access Token Lifetime:** 15 minutes
- **Payload Includes:**
    - `sub` (User ID)
    - `role` (User Role)
    - `permissions` (List of specific authorities)
    - `iat` (Issued at)
    - `exp` (Expiration)

### Refresh Token
- **Storage:** Database-backed for revocation capability.
- **Lifetime:** 7 days
- **Usage:** Used to obtain a new Access Token without re-authenticating.
- **Revocation:** Tokens are invalidated upon logout or manual revocation by admin.

## 2. API Security

### Rate Limiting
- **Mechanism:** Bucket4j or Spring Cloud Gateway RateLimiter.
- **Limits:**
    - Public Endpoints: 100 requests / minute / IP.
    - Auth Endpoints (Login/Register): 5 requests / minute / IP.
    - Authenticated Endpoints: 500 requests / minute / User.

### CORS (Cross-Origin Resource Sharing)
- Allowed Origins: Configured via environment variables (e.g., `https://freelo.com.br`, `http://localhost:3000`).
- Allowed Methods: `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`.
- Allowed Headers: `Authorization`, `Content-Type`, `X-Requested-With`.

## 3. Data Protection

### Encryption
- **At Rest:** Database fields containing PII (CPF, Phone) encrypted using AES-256.
- **In Transit:** Mandatory TLS 1.3 for all communications.

### Password Hashing
- **Algorithm:** BCrypt with a cost factor of 12.

## 4. Auditing

### Persistence
- Every change to critical entities (Financial, Scale, User Profile) must be audited.
- **Audit Log Schema:**
    - `timestamp`
    - `userId`
    - `action` (CREATE, UPDATE, DELETE)
    - `entityName`
    - `entityId`
    - `oldValue` (JSON)
    - `newValue` (JSON)
    - `ipAddress`

### Implementation
- Use `Spring Data Envers` or a custom Aspect-Oriented (AOP) approach for fine-grained control.
