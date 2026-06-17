# Módulo: Notificações (Notifications)

## 1. Objetivo
Garantir que todos os usuários recebam alertas críticos, atualizações de status e lembretes importantes em tempo real através de múltiplos canais.

## 2. Regras de Negócio
- **Prioridade**: Notificações de check-in e pagamentos têm prioridade máxima.
- **Canais**: Suporte a Push (Mobile), E-mail, SMS (opcional) e In-app.
- **Preferências**: O usuário deve poder escolher quais tipos de notificação deseja receber por canal.
- **Agrupamento**: Evitar spam agrupando notificações similares (ex: "Você tem 5 novos candidatos").

## 3. Fluxos
1. **Disparo de Evento**: Sistema gera um evento -> Notification Service processa -> Identifica canal preferencial -> Entrega.
2. **Lembrete Automático**: Disparado X horas antes de um evento começar.
3. **Leitura**: Marcar como lido ao abrir o app ou clicar na notificação.
4. **Fallback**: Se o Push falhar, tentar e-mail para mensagens críticas.

## 4. Permissões
- **Sistema**: Autorizado a enviar para todos os usuários conforme regras de negócio.
- **Usuário**: Configurar silenciamento ou desativação de canais.

## 5. Dependências
- **Backend**: Firebase Cloud Messaging (FCM), AWS SES/SendGrid, Twilio (para SMS).

## 6. APIs Necessárias
- `GET /notifications`: Listar notificações in-app recentes.
- `PATCH /notifications/{id}/read`: Marcar como lida.
- `PUT /notifications/settings`: Atualizar preferências de notificação.

## 7. Eventos de Domínio
- `NotificationSent`: Alerta enviado com sucesso.
- `NotificationOpened`: Usuário interagiu com a notificação.
- `NotificationFailed`: Falha na entrega.

## 8. Casos de Uso
- **UC25**: Notificar trabalhador sobre nova vaga compatível com seu perfil.
- **UC26**: Alertar coordenador sobre atraso de trabalhador (ausência de check-in).
- **UC27**: Confirmar recebimento de pagamento via Push.

## 9. Critérios de Aceite
- O tempo entre o evento de domínio e a chegada da notificação push não deve exceder 5 segundos.
- O app mobile deve solicitar permissão de notificação no primeiro login.
- Deve haver um histórico de notificações acessível dentro do perfil do usuário.
