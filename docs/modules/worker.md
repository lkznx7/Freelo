# Módulo: Trabalhador (Worker)

## 1. Objetivo
Gerenciar a jornada do profissional freelance, desde a busca por vagas até o recebimento de pagamentos e construção de reputação.

## 2. Regras de Negócio
- **Candidatura**: O trabalhador só pode se candidatar a vagas compatíveis com suas especialidades.
- **Check-in/Check-out**: Obrigatório o uso de geolocalização para validar a presença no evento.
- **Avaliação**: O trabalhador ganha XP e nível baseado nas notas recebidas das empresas.
- **Cancelamento**: Penalidades (perda de XP) para cancelamentos com menos de 24h para o evento.

## 3. Fluxos
1. **Busca de Vagas**: Filtros por data, valor e distância -> Visualização de detalhes -> Candidatura.
2. **Ciclo de Trabalho**: Selecionado -> Confirmação de presença -> Check-in no local -> Execução -> Check-out.
3. **Gestão de Perfil**: Edição de bio, fotos de trabalhos anteriores e documentos.

## 4. Permissões
- Ver vagas disponíveis.
- Candidatar-se a vagas.
- Ver próprio histórico financeiro.
- Avaliar empresas/coordenadores após o evento.

## 5. Dependências
- **Frontend**: Componentes de `JobCard`, `SkeletonLoading`.
- **APIs**: Jobs API, User Profile API, Presence API.

## 6. APIs Necessárias
- `GET /workers/me`: Dados do perfil logado.
- `POST /applications`: Candidatar-se a uma vaga.
- `GET /workers/jobs/my-jobs`: Lista de trabalhos confirmados e passados.
- `POST /presence/check-in`: Registrar entrada no evento.

## 7. Eventos de Domínio
- `ApplicationSubmittedEvent`: Quando o trabalhador se candidata.
- `CheckInPerformedEvent`: Registro de chegada no evento.
- `WorkerRankUpEvent`: Quando o trabalhador sobe de nível de experiência.

## 8. Casos de Uso
- **UC04**: Buscar e filtrar vagas por valor da diária.
- **UC05**: Realizar check-in via QR Code ou Geofencing.
- **UC06**: Consultar extrato de ganhos futuros.

## 9. Critérios de Aceite
- O trabalhador não pode se candidatar a dois eventos que ocorram no mesmo horário.
- O check-in deve falhar se o usuário estiver fora do raio de 500m do local do evento.
- A barra de progresso do perfil deve atualizar em tempo real ao preencher dados.