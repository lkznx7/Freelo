# Módulo: Chat

**Responsável:** Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

## 1. Objetivo
Facilitar a comunicação direta entre contratantes e contratados, permitindo o alinhamento de detalhes técnicos e operacionais antes e durante os eventos.

## 2. Responsabilidades
- **Gestão de Conversas:** Criação de canais de chat baseados em contratações.
- **Mensageria:** Envio e recebimento de mensagens de texto.
- **Histórico:** Armazenamento e recuperação de conversas passadas.
- **Status de Leitura:** Indicadores de visualização.

## 3. Não é responsabilidade
- Enviar alertas de sistema (Aprovações, Vagas) -> **Módulo Notifications**.
- Formalizar contratos -> **Módulo Jobs**.

## 4. Entidades Principais
- **Conversation:** O canal entre dois ou mais usuários.
- **Message:** O conteúdo enviado.

## 5. Casos de Uso
- **Iniciar Conversa:** Aberto automaticamente ou manualmente após contratação.
- **Enviar Mensagem:** Comunicação em tempo real ou assíncrona.
- **Listar Conversas:** Visão geral da caixa de entrada.

## 6. Eventos de Domínio
- **MessageSent:** Notifica o destinatário via *Notifications* se ele estiver offline.
- **ConversationStarted:** Registro de novo canal.

## 7. Integrações
- **Users:** Para identificar os participantes e exibir avatar/nome.
- **Jobs:** Gatilho para abrir canais de chat baseados em contratações aprovadas.

## 8. APIs Previstas
- `GET /chat/conversations`
- `GET /chat/conversations/{id}/messages`
- `POST /chat/messages`
- `PATCH /chat/messages/{id}/read`
