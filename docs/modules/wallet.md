# Módulo: Wallet

**Responsável:** Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

## 1. Objetivo
Gerenciar toda a infraestrutura financeira, garantindo segurança nos pagamentos das empresas e recebimentos dos profissionais.

## 2. Responsabilidades
- **Gestão de Saldo:** Controle de valores disponíveis, pendentes e bloqueados.
- **Extrato Financeiro:** Histórico detalhado de entradas e saídas.
- **Processamento de Pagamentos:** Integração com meios de pagamento (PIX).
- **Liquidação (Saques):** Transferência de valores para a conta bancária do usuário.
- **Custódia (Escrow):** Retenção do valor do cachê até a conclusão do serviço.

## 3. Não é responsabilidade
- Decidir valor de cachê -> **Módulo Jobs**.
- Validar presença no evento -> **Módulo Events**.

## 4. Entidades Principais
- **Wallet:** A carteira do usuário.
- **Transaction:** Registro individual de crédito ou débito.
- **Payout:** Solicitação de saque para conta externa.

## 5. Casos de Uso
- **Consultar Saldo e Extrato:** Visão geral financeira.
- **Realizar Saque:** Transferir saldo disponível via PIX.
- **Liberar Cachê:** Transformar saldo pendente em disponível após evento concluído.
- **Provisionar Pagamento:** Reservar valor da empresa ao contratar profissional.

## 6. Eventos de Domínio
- **PaymentProvisioned:** Valor reservado pela empresa.
- **BalanceUpdated:** Alteração no saldo do usuário.
- **WithdrawPerformed:** Saque concluído com sucesso.

## 7. Integrações
- **Jobs:** Recebe sinal para provisionar valor na contratação.
- **Events:** Recebe sinal de conclusão de serviço para liberar o saldo.
- **Notifications:** Avisa o usuário sobre novos créditos.

## 8. APIs Previstas
- `GET /wallet/balance`
- `GET /wallet/transactions`
- `POST /wallet/withdraw`
- `GET /wallet/tax-invoice` (Emissão de nota/recibo)
