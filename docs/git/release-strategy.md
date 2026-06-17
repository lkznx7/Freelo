# Release Strategy

## 1. Versioning
We use **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH`.
- **MAJOR**: Incompatible API changes.
- **MINOR**: Add functionality in a backwards-compatible manner.
- **PATCH**: Backwards-compatible bug fixes.

## 2. Release Cycle
1. **Freeze**: Features for the next release are merged into `develop`.
2. **Branching**: `release/vX.Y.Z` is created from `develop`.
3. **QA/Bugs**: Only bug fixes are committed to the release branch.
4. **Finalization**:
   - Merge `release/*` into `main`.
   - Tag the commit on `main` as `vX.Y.Z`.
   - Merge `release/*` back into `develop` to ensure fixes are synced.
5. **Deletion**: Delete the `release/*` branch.

## 3. Milestones
- **v1.0.0 (MVP)**: Full frontend UI + Technical Documentation suite.
- **v1.1.0**: Core Backend (Auth & Users).
- **v1.2.0**: Job & Event Management.
- **v2.0.0**: Microservices Expansion.
