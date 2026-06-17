# Módulo: Eventos (Events)

## 1. Objetivo
Organizar vagas em agrupamentos lógicos (Eventos), permitindo uma gestão macro de grandes operações que envolvem múltiplos dias, locais e equipes.

## 2. Regras de Negócio
- **Agrupamento**: Um evento pode conter várias "Scales" (Escalas) e "Jobs" (Vagas).
- **Datas**: O evento possui uma data de início e fim global.
- **Coordenação**: Um evento pode ter um Coordenador Geral e sub-coordenadores por escala.
- **Documentação**: Centralização de manuais, treinamentos e assets do evento.

## 3. Fluxos
1. **Planejamento do Evento**: Nome -> Descrição -> Período -> Branding -> Upload de materiais de treinamento.
2. **Criação de Escalas**: Definir turnos dentro do evento -> Associar vagas a cada turno.
3. **Monitoramento**: Painel de controle em tempo real do status de todas as vagas do evento.
4. **Finalização**: Consolidação de horas trabalhadas em todo o evento para faturamento.

## 4. Permissões
- **Company Admin**: Criar e gerenciar eventos completos.
- **Coordinator**: Acessar detalhes dos eventos atribuídos.

## 5. Dependências
- **Módulos**: Jobs, Company, Coordinator.
- **Backend**: Calendário/Agenda para visualização de conflitos.

## 6. APIs Necessárias
- `POST /events`: Criar novo evento macro.
- `GET /events/{id}/dashboard`: Resumo do status do evento.
- `GET /events/upcoming`: Lista de próximos eventos da empresa.
- `POST /events/{id}/briefing`: Adicionar documentos de treinamento.

## 7. Eventos de Domínio
- `EventCreated`: Evento macro criado.
- `EventBriefingUpdated`: Novos materiais de treinamento adicionados.
- `EventArchived`: Evento encerrado e movido para histórico.

## 8. Casos de Uso
- **UC16**: Criar um festival de 3 dias com 50 vagas distribuídas em turnos.
- **UC17**: Disponibilizar material de treinamento via app para os promotores.
- **UC18**: Visualizar mapa de calor de presenças no evento.

## 9. Critérios de Aceite
- O sistema deve permitir a cópia de eventos anteriores para agilizar o setup.
- Deve haver suporte para download offline de briefings no app mobile.
- O dashboard do evento deve destacar vagas que ainda não foram preenchidas e faltam menos de 48h.
