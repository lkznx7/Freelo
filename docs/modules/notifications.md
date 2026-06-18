# Módulo: Notifications

**Responsável:** Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

## 1. Objetivo
Centralizar e gerenciar toda a comunicação enviada pelo sistema aos usuários, garantindo que informações críticas sejam entregues no tempo certo.

## 2. Responsabilidades
- **Multi-canal:** Gestão de envios via In-app (Push/Sino), E-mail e futuramente WhatsApp.
- **Templatização:** Padronização visual das mensagens enviadas.
- **Preferências de Entrega:** Respeitar o que o usuário deseja receber em cada canal.
- **Rastreabilidade:** Saber se uma notificação foi entregue e lida.

## 3. Não é responsabilidade
- Gerar o conteúdo lógico (quem foi aprovado, quanto foi pago) -> **Módulos de Origem**.
- Comunicação direta entre humanos -> **Módulo Chat**.

## 4. Entidades Principais
- **Notification:** O registro do alerta enviado.
- **NotificationTemplate:** O modelo da mensagem (assunto, corpo).

## 5. Casos de Uso
- **Enviar Alerta de Sistema:** Notificar sobre nova vaga ou aprovação.
- **Listar Notificações:** Exibir histórico no "sino" do dashboard.
- **Marcar como Lida:** Gestão de status do alerta.

## 6. Eventos de Domínio
- **NotificationSent:** Alerta disparado com sucesso.
- **NotificationFailed:** Falha no envio (ex: e-mail inválido).

## 7. Integrações
- **Todos os Módulos:** Atua como consumidor de eventos (`WorkerHired`, `PaymentReleased`, `JobPublished`) para gerar alertas.

## 8. APIs Previstas
- `GET /notifications`
- `PATCH /notifications/{id}/read`
- `DELETE /notifications/{id}`
- `PUT /notifications/settings`
