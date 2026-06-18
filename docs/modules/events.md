# Módulo: Events

**Responsável:** Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

## 1. Objetivo
Gerenciar a execução operacional dos eventos, focando na organização das equipes e no cumprimento das escalas de trabalho.

## 2. Responsabilidades
- **Organização de Equipes (Teams):** Agrupamento de profissionais contratados por função ou área.
- **Gestão de Escalas (Shifts):** Definição de horários de início, término e intervalos.
- **Coordenação On-site:** Ferramentas para coordenadores acompanharem a presença.
- **Controle de Presença:** Registro de check-in e check-out dos profissionais.

## 3. Não é responsabilidade
- Sourcing e contratação -> **Módulo Jobs**.
- Pagamento de diárias -> **Módulo Wallet**.

## 4. Entidades Principais
- **Event:** O evento operacional (conectado a um ou mais Jobs).
- **Team:** Grupo de profissionais (ex: Equipe de Bar, Equipe de Recepção).
- **Shift:** O turno de trabalho específico.
- **Assignment:** Vínculo de um profissional a um turno e equipe.

## 5. Casos de Uso
- **Criar Planejamento de Evento:** Definir estrutura de equipes.
- **Montar Escala:** Atribuir profissionais contratados aos turnos.
- **Realizar Check-in:** Registrar entrada do profissional no local.
- **Finalizar Evento:** Validar horas trabalhadas para liberação de pagamento.

## 6. Eventos de Domínio
- **EventStarted:** Notifica início das operações.
- **CheckInPerformed:** Registro de chegada.
- **EventFinalized:** Gatilho para liberação de pagamentos na *Wallet*.

## 7. Integrações
- **Jobs:** Consome a lista de profissionais contratados.
- **Users:** Para identificação dos coordenadores e promoters.
- **Wallet:** Informa a conclusão do serviço para processamento financeiro.

## 8. APIs Previstas
- `GET /events`
- `POST /events`
- `GET /events/{id}/team`
- `POST /events/{id}/shifts`
- `POST /events/check-in`
- `GET /events/{id}/operational-view`
