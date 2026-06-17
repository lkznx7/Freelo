# Auth Entity

## Modelo de Dados (Typescript/JSON)

```typescript
// Worker Registration
interface WorkerRegistration {
  name: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email: string;
  password: string;
  cep: string;
  city: string;
  state: string;
  role: 'waiter' | 'receptionist' | 'security' | 'promoter';
  experience: 'none' | 'less_1' | '1_3' | 'more_3';
  availability: 'weekends' | 'weekdays' | 'any';
  profileImage?: string; // Base64 or URL
  documentImage?: string; // Base64 or URL
}

// Company Registration
interface CompanyRegistration {
  companyName: string;
  tradeName: string;
  cnpj: string;
  responsible: string;
  phone: string;
  email: string;
  password: string;
}

// Login
interface LoginCredentials {
  email: string;
  password: string;
}

// Auth Response
interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    profileType: 'worker' | 'company';
  };
}
```

## Endpoints de API Esperados

- `POST /api/auth/login`: Authenticates a user and returns a JWT token.
- `POST /api/auth/register/worker`: Registers a new worker profile.
- `POST /api/auth/register/company`: Registers a new company profile.
- `POST /api/auth/forgot-password`: Initiates password recovery process.
- `POST /api/auth/logout`: Invalidates the current session.
