# Estrutura Backend: Módulo Financeiro (Wallet)

## 1. Domain
### Entidades / Agregados
- **Wallet**: ID, UserId, Balance, ProvisionedAmount, Currency.
- **Transaction**: ID, WalletId, Type (DEPOSIT, WITHDRAWAL, PAYMENT_SENT, PAYMENT_RECEIVED, FEE), Amount, Status (PENDING, COMPLETED, FAILED), ReferenceId (Ex: JobId).

### Regras de Negócio (Domain Rules)
- O `Balance` não pode ser menor que zero.
- Operações de `PAYMENT_RECEIVED` só liberam o saldo após o `ProvisionedAmount` ser debitado da carteira de origem.

## 2. Application
### Casos de Uso (Use Cases)
- `DepositFunds`: Entrada de dinheiro no sistema.
- `ProvisionPayment`: Reserva de valor ao preencher uma vaga.
- `ReleasePayment`: Transferência efetiva do valor para o trabalhador.
- `RequestWithdrawal`: Saque de valores para conta externa.

## 3. Infrastructure
### Adapters
- `JpaWalletRepository`: Persistência JPA.
- `AsaasGatewayAdapter`: Integração com gateway de pagamentos.

## 4. Presentation
### Endpoints
- `GET /api/v1/wallet/balance`
- `POST /api/v1/wallet/deposit`
- `POST /api/v1/wallet/withdraw`

## 5. Eventos de Domínio
- `BalanceUpdated`: Notificação de novo saldo.
- `TransactionCompleted`: Sucesso na operação financeira.
- `PaymentEscrowed`: Valor reservado em garantia.
