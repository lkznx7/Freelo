# Módulo: Financeiro (Wallet)

## 1. Objetivo
Gerenciar todas as transações financeiras da plataforma, incluindo depósitos de empresas, pagamentos a trabalhadores, taxas de serviço e saques (cash-out).

## 2. Regras de Negócio
- **Provisionamento (Escrow)**: O valor do trabalho deve ser bloqueado na conta da empresa assim que a vaga é preenchida.
- **Liberação de Saldo**: O saldo é liberado para o trabalhador após a confirmação de conclusão pelo Coordenador/Empresa (D+2 ou conforme regra).
- **Taxas**: O sistema desconta uma taxa percentual ou fixa sobre cada transação realizada.
- **Saques**: Valor mínimo para saque e prazo de processamento (ex: PIX imediato ou TED 24h).

## 3. Fluxos
1. **Cash-in (Empresa)**: Escolher valor -> Gerar PIX/Boleto -> Confirmar crédito em conta.
2. **Pagamento Automático**: Vaga concluída -> Sistema transfere do provisionado para o saldo do trabalhador.
3. **Solicitação de Saque**: Trabalhador solicita -> Validação de identidade/segurança -> Processamento bancário.
4. **Extrato**: Visualização detalhada de ganhos, bônus, descontos e tributos.

## 4. Permissões
- **Usuário (Company/Worker)**: Ver saldo, extrato e realizar operações permitidas.
- **Financeiro Freelo (Admin)**: Aprovar saques manuais, estornar valores, gerenciar taxas.

## 5. Dependências
- **Módulos**: Jobs, Authentication (KYC).
- **Integrações**: Gateway de Pagamento (Asaas, Juno, Stripe ou PIX Direto).

## 6. APIs Necessárias
- `GET /wallet/balance`: Saldo atual e saldo a receber (provisionado).
- `POST /wallet/deposit`: Iniciar depósito (gerar QR Code PIX).
- `POST /wallet/withdraw`: Solicitar transferência para conta bancária.
- `GET /wallet/statement`: Histórico de transações com filtros.

## 7. Eventos de Domínio
- `PaymentProvisioned`: Valor reservado para uma vaga.
- `PaymentReleased`: Saldo liberado para o trabalhador.
- `WithdrawalRequested`: Pedido de saque recebido.
- `TransactionFailed`: Falha no processamento financeiro.

## 8. Casos de Uso
- **UC19**: Realizar pagamento em lote para 100 promotores após festival.
- **UC20**: Automatizar cálculo de impostos e taxas da plataforma.
- **UC21**: Conciliação bancária automática via Webhooks.

## 9. Critérios de Aceite
- O sistema deve manter logs de auditoria imutáveis para todas as transações.
- Erros em transações financeiras devem disparar alertas imediatos para a equipe de suporte.
- O saldo do trabalhador nunca deve ser negativo.
