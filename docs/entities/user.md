# User Entity

## Modelo de Dados (Typescript/JSON)

```typescript
interface User {
  id: string;
  name: string;
  avatar: string;
  role: string; // e.g., "Garçom Pro"
  xp: number;
  rating: number; // 0-5
  location: string;
  status: 'Available' | 'Busy';
  experience: string; // e.g., "3 years"
  email: string;
  phone: string;
  verified: boolean;
  totalJobs: number;
  bio?: string;
  skills: string[]; // e.g., ["Atendimento ao Cliente", "Inglês"]
  certifications?: string[];
}
```

## Endpoints de API Esperados

- `GET /api/users/profile`: Returns the authenticated user's profile data.
- `PUT /api/users/profile`: Updates the authenticated user's profile.
- `GET /api/users/{id}`: Returns public profile information for a specific user.
- `GET /api/users/search`: Searches for workers (used by companies).
- `POST /api/users/avatar`: Uploads a new profile picture.
