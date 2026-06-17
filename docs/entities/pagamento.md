# Pagamento Entity

## Modelo de Dados (Typescript/JSON)

```typescript
interface Transaction {
  id: string;
  transactionId: string;
  date: string;
  description: string;
  amount: number; // Positive for income, negative for outcome
  type: 'income' | 'outcome';
  status: 'completed' | 'pending' | 'failed';
  category: 'Staff' | 'Saldo' | 'Taxa' | 'Saque';
  paymentMethod: 'PIX';
  jobId?: string;
}
```

## Endpoints de API Esperados

- `GET /api/wallet/balance`: Returns the current available and pending balance.
- `GET /api/wallet/transactions`: Returns a list of all transactions.
- `POST /api/wallet/withdraw`: Requests a withdrawal to a PIX key.
- `GET /api/wallet/pix-keys`: Returns saved PIX keys for the user.
- `POST /api/wallet/pix-keys`: Saves a new PIX key.
