# Módulo: Comunicação (Chat)

## 1. Objetivo
Facilitar a comunicação direta e segura entre empresas, coordenadores e trabalhadores durante o ciclo de vida de uma vaga ou evento.

## 2. Regras de Negócio
- **Canais Temporários**: Chats de vagas podem ser criados automaticamente e encerrados após a conclusão do serviço.
- **Privacidade**: O número de telefone pessoal não deve ser exposto (opcional, conforme configuração).
- **Conteúdo**: Suporte a mensagens de texto, imagens e áudio.
- **Moderação**: Filtros automáticos de palavras ofensivas e denúncia de usuários.

## 3. Fluxos
1. **Chat de Vaga**: Criado quando o trabalhador é aprovado -> Notificação de novo canal -> Conversas sobre logística.
2. **Chat de Equipe (Escala)**: Canal de grupo entre Coordenador e todos os Promotores aprovados para aquele dia.
3. **Notificações em Tempo Real**: Push notification para novas mensagens.
4. **Histórico**: Acesso às conversas passadas para fins de auditoria em caso de disputas.

## 4. Permissões
- **Participantes**: Somente usuários vinculados à vaga/evento podem acessar o canal respectivo.

## 5. Dependências
- **Frontend**: Socket.io-client ou WebSockets nativos.
- **Backend**: Redis (para Pub/Sub), MongoDB ou PostgreSQL (para persistência de mensagens).

## 6. APIs Necessárias
- `GET /chat/rooms`: Listar salas de chat ativas.
- `GET /chat/rooms/{id}/messages`: Recuperar histórico de mensagens.
- `POST /chat/rooms/{id}/send`: Enviar mensagem (texto/asset).
- `POST /chat/report`: Denunciar comportamento inadequado no chat.

## 7. Eventos de Domínio
- `MessageSent`: Mensagem disparada.
- `ChatRoomCreated`: Nova sala de conversa aberta.
- `UserTyping`: Indicação de que o outro usuário está escrevendo.

## 8. Casos de Uso
- **UC22**: Coordenador enviando localização exata do ponto de encontro via chat.
- **UC23**: Trabalhador enviando foto do uniforme para validação.
- **UC24**: Auditoria de conversa após reclamação de assédio ou má conduta.

## 9. Critérios de Aceite
- As mensagens devem ser entregues em menos de 200ms em condições normais de rede.
- O chat deve indicar o status da mensagem (Enviado/Entregue/Lido).
- Suporte a modo offline (fila de envio para quando a conexão retornar).
