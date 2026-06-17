# Módulo: Coordenador (Coordinator)

## 1. Objetivo
Funcionar como o elo operacional entre a empresa e os trabalhadores, gerenciando escalas, confirmando presenças e garantindo a entrega do serviço nos eventos.

## 2. Regras de Negócio
- **Vínculo**: O coordenador deve estar vinculado a uma ou mais empresas.
- **Autoridade**: Pode aprovar candidatos para vagas em eventos que coordena.
- **Check-in/Check-out**: Responsável por validar a entrada e saída dos promotores (trabalhadores).
- **Relatórios**: Deve emitir um feedback/relatório final após o término do evento.

## 3. Fluxos
1. **Atribuição a Evento**: Empresa designa coordenador -> Notificação recebida -> Aceite do coordenador.
2. **Seleção de Equipe**: Visualizar candidatos -> Analisar perfil/avaliações -> Aprovar/Reprovar para a escala.
3. **Controle de Presença**: No dia do evento, ler QR Code do trabalhador ou marcar manualmente -> Validar jornada.
4. **Fechamento de Escala**: Confirmar horas trabalhadas -> Avaliar desempenho dos promotores -> Finalizar.

## 4. Permissões
- **Coordenador**: Ver eventos atribuídos, gerenciar candidatos desses eventos, realizar check-ins.

## 5. Dependências
- **Módulos**: Jobs, Eventos, Notificações.
- **Funcionalidades**: Localização (Geofencing) para check-in.

## 6. APIs Necessárias
- `GET /coordinator/events`: Listar eventos sob sua coordenação.
- `GET /coordinator/event/{id}/candidates`: Listar candidatos para um evento específico.
- `POST /coordinator/check-in`: Registrar entrada de trabalhador.
- `POST /coordinator/scale/close`: Fechar escala de trabalho.

## 7. Eventos de Domínio
- `CoordinatorAssignedToEvent`: Coordenador vinculado a um evento.
- `WorkerAttendanceConfirmed`: Presença do trabalhador validada.
- `EventOperationalClosed`: Operação do evento finalizada pelo coordenador.

## 8. Casos de Uso
- **UC07**: Selecionar equipe ideal para evento promocional.
- **UC08**: Validar presença de trabalhadores via QR Code.
- **UC09**: Gerenciar substituições de última hora (backup).

## 9. Critérios de Aceite
- O check-in só deve ser permitido dentro do raio de distância configurado para o evento.
- O coordenador não pode aprovar mais candidatos do que o número de vagas disponíveis.
- Relatórios de fechamento devem ser obrigatórios para liberação de pagamentos.
