# Serviço (Job) Entity

## Modelo de Dados (Typescript/JSON)

```typescript
interface Job {
  id: string;
  title: string;
  companyId: string;
  companyName: string;
  location: string;
  address: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  status: 'active' | 'filled' | 'draft' | 'finished';
  category: 'Gala' | 'Show' | 'Infantil' | 'Corporativo';
  imageUrl?: string;
  description: string;
  requirements: string[];
  benefits: string[];
  totalSpots: number;
  availableSpots: number;
  hiredCount: number;
  tags: string[];
  verifiedCompany: boolean;
  companyRating: number;
}
```

## Endpoints de API Esperados

- `GET /api/jobs`: Lists all available jobs with filters (category, location, date).
- `GET /api/jobs/{id}`: Returns full details for a specific job.
- `POST /api/jobs`: Creates a new job (Company only).
- `PUT /api/jobs/{id}`: Updates job details.
- `DELETE /api/jobs/{id}`: Cancels a job.
- `GET /api/companies/my-jobs`: Lists all jobs created by the authenticated company.
