# Empresa Entity

## Modelo de Dados (Typescript/JSON)

```typescript
interface Empresa {
  id: string;
  name: string;
  tradeName: string;
  logo: string;
  cnpj: string;
  responsible: string;
  email: string;
  phone: string;
  activeEventsCount: number;
  totalHiredCount: number;
  budgetSpent: number;
  averageRatingGiven: number;
  verified: boolean;
  location?: string;
}
```

## Endpoints de API Esperados

- `GET /api/companies/dashboard`: Returns summary stats for the company dashboard.
- `GET /api/companies/profile`: Returns the company's profile data.
- `PUT /api/companies/profile`: Updates company profile information.
- `GET /api/companies/{id}`: Returns public information about a company.
- `GET /api/companies/stats`: Returns detailed financial and hiring statistics.
