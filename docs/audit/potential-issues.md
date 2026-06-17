# Potential Issues & Bug Report

Analysis of potential failures, incomplete flows, and edge cases.

## 1. Concurrent Applications
- **Issue:** If two workers apply simultaneously for a job with only one spot left, both might be accepted if the "decrement spots" logic is not properly synchronized or handled via database locks.
- **Risk:** Overbooking of jobs.
- **Status:** Needs backend `SELECT ... FOR UPDATE` or optimistic locking.

## 2. Incomplete Cancellation Flow
- **Issue:** When a Company cancels an Event/Job, there is no documented logic for refunding or notifying workers who were already confirmed.
- **Risk:** Negative user experience and financial inconsistency.
- **Status:** Workflow missing in `ApplicationService`.

## 3. Financial Edge Cases
- **Issue:** Lack of "Insufficient Funds" check when a company creates an event that requires a guaranteed budget.
- **Risk:** Workers performing jobs without guaranteed payment.
- **Status:** Validation logic needed in `EventService` vs `WalletService`.

## 4. Frontend Error Handling
- **Issue:** Many components lack `Error Boundaries` or specific loading/error states for API failures.
- **Risk:** Blank screens or infinite loading indicators.
- **Status:** Visible in `dashboard/page.tsx` and `jobs/page.tsx`.

## 5. Token Expiration UX
- **Issue:** No implementation for automatic logout or "session expired" warning when the JWT expires and the Refresh Token fails.
- **Risk:** User attempting actions and receiving cryptic 401/403 errors.
- **Status:** Frontend Auth hook needs update.

## 6. Profile Verification Loop
- **Issue:** The `Worker.verified` flag is documentation only; there is no admin screen or automated service to verify documents (CPF/RG).
- **Risk:** Unverified workers accessing "Verified Only" high-paying jobs.
- **Status:** Identity verification module pending.
