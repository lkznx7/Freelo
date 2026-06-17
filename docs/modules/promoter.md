# Módulo: Promotor (Promoter/Worker)

## 1. Objetivo
Representar o trabalhador final, permitindo que ele encontre oportunidades, gerencie sua agenda de eventos, registre sua produtividade e receba pagamentos.

## 2. Regras de Negócio
- **Perfil Profissional**: Deve manter fotos atualizadas e currículo detalhado.
- **Candidatura**: Pode se candidatar a múltiplas vagas, mas o sistema deve alertar sobre conflitos de horário.
- **Comprometimento**: Cancelamentos de última hora (ex: < 24h) geram penalidades no score.
- **Score/Rating**: A visibilidade das melhores vagas depende da média de avaliações recebidas.

## 3. Fluxos
1. **Busca de Jobs**: Filtrar por categoria, data, valor e distância -> Visualizar detalhes.
2. **Candidatura**: Enviar interesse -> Aguardar aprovação do Coordenador/Empresa -> Notificação de aceite.
3. **Jornada de Trabalho**: Receber check-in do coordenador -> Executar serviço -> Receber check-out.
4. **Pós-Evento**: Avaliar o coordenador/empresa -> Verificar saldo provisionado na carteira.

## 4. Permissões
- **Worker/Promoter**: Visualizar vagas públicas, gerenciar próprio perfil, candidatar-se, ver extrato.

## 5. Dependências
- **Módulos**: Jobs, Wallet, Avaliações, Notificações.
- **Hardware**: GPS do celular para validação de presença.

## 6. APIs Necessárias
- `GET /jobs/available`: Listar vagas compatíveis com o perfil.
- `POST /jobs/{id}/apply`: Candidatar-se a uma vaga.
- `GET /my-schedule`: Listar eventos confirmados.
- `GET /worker/stats`: Ver score e histórico de trabalhos.

## 7. Eventos de Domínio
- `ApplicationSubmitted`: Candidatura realizada.
- `JobAcceptedByWorker`: Trabalhador confirmou presença após aprovação.
- `WorkerCheckedIn`: Entrada registrada no evento.

## 8. Casos de Uso
- **UC10**: Encontrar e filtrar vagas por maior remuneração.
- **UC11**: Gerenciar agenda semanal de eventos.
- **UC12**: Solicitar saque de valores recebidos.

## 9. Critérios de Aceite
- O sistema deve impedir candidaturas em horários conflitantes com eventos já confirmados.
- O perfil deve estar pelo menos 80% completo para permitir candidaturas a "Vagas Premium".
- A localização deve ser enviada apenas durante o período de check-in/out (privacidade).
