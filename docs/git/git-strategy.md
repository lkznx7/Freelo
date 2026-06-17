# Git Strategy - Freelo

## 1. Overview
The Freelo project adopts a **Git Flow** based branching model to ensure organized development, stable releases, and clear traceability of features and documentation.

## 2. Branching Model
- **`main`**: Production-ready state. Only receives merges from `release/*` or `hotfix/*`.
- **`develop`**: Integration branch for features. The "working" baseline.
- **`feature/*`**: Dedicated branches for specific system modules or features.
- **`docs/*`**: Dedicated branches for architectural and technical documentation.
- **`release/*`**: Preparation for production releases.
- **`hotfix/*`**: Immediate production fixes.

## 3. Commit Convention
We follow the **Conventional Commits** standard:
- `feat:`: New feature.
- `fix:`: Bug fix.
- `docs:`: Documentation changes.
- `style:`: Formatting, missing semi-colons, etc.
- `refactor:`: Refactoring production code.
- `test:`: Adding missing tests.
- `chore:`: Maintenance tasks.

## 4. Workflow
1. Create a `feature/*` or `docs/*` branch from `develop`.
2. Work on the task and commit using conventions.
3. Open a Pull Request (PR) to `develop`.
4. After review and CI approval, merge into `develop`.
5. When ready for release, create `release/vX.Y.Z` from `develop`.
6. Merge `release/*` into `main` and `develop`.
