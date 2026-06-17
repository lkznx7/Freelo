# Estrutura Backend: Módulo Comunicação (Chat)

## 1. Domain
### Entidades / Agregados
- **ChatRoom**: ID, Name, Type (JOB, SCALE, DIRECT), Participants (List<UserId>), Status (ACTIVE, CLOSED).
- **Message**: ID, RoomId, SenderId, Content, Type (TEXT, IMAGE, AUDIO), Timestamp, ReadBy (List<UserId>).

### Regras de Negócio (Domain Rules)
- Apenas participantes ativos podem enviar mensagens para uma sala.
- Salas do tipo JOB são encerradas automaticamente 7 dias após a conclusão do trabalho.

## 2. Application
### Casos de Uso (Use Cases)
- `CreateRoom`: Abertura de canal de comunicação.
- `SendMessage`: Persistência e despacho de mensagem.
- `MarkAsRead`: Atualização de status de leitura.
- `CloseRoom`: Arquivamento de conversa.

## 3. Infrastructure
### Adapters
- `MongoMessageRepository`: Persistência de alta performance para mensagens.
- `WebSocketAdapter`: Comunicação bi-direcional em tempo real.

## 4. Presentation
### Endpoints
- `GET /api/v1/chat/rooms`
- `GET /api/v1/chat/rooms/{id}/messages`

## 5. Eventos de Domínio
- `NewMessageReceived`: Notificação imediata via Socket.
- `UserJoinedRoom`: Atualização na lista de participantes.
