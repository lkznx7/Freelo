# Backend Module: Reviews Structure

## Application Layer
- **Use Cases:**
  - `SubmitReviewUseCase`: Validates and persists a new review.
  - `CalculateUserRatingUseCase`: Updates the worker/company average rating.
  - `ListUserReviewsUseCase`: Retrieves reviews for a specific profile.
- **DTOs:**
  - `ReviewDTO`, `ReviewRequest`.

## Domain Layer
- **Entities:**
  - `Review`: Aggregate root with `rating` (1-5), `comment`, `evaluatorId`, `evaluatedId`, `jobId`.
- **Domain Rules:**
  - A user cannot review themselves.
  - A review can only be submitted after job completion.
- **Events:**
  - `ReviewSubmittedEvent`.
- **Repository Interface:**
  - `ReviewRepository`.

## Infrastructure Layer
- **Persistence:**
  - `JpaReviewRepository`: Spring Data JPA implementation.

## Presentation Layer
- **Controllers:**
  - `ReviewController`: Endpoints for submitting and listing reviews.
