# Módulo: Vagas (Jobs)

## 1. Objetivo
Gerenciar o ciclo de vida das oportunidades de trabalho, desde a criação pela empresa até o preenchimento total das vagas e conclusão do serviço.

## 2. Regras de Negócio
- **Tipos de Vaga**: Podem ser por hora, diária ou projeto fechado.
- **Status da Vaga**: Rascunho, Aberta, Em Seleção, Preenchida, Em Andamento, Concluída, Cancelada.
- **Requisitos**: A empresa pode definir requisitos mínimos (idade, gênero, experiência, uniforme).
- **Matching**: O sistema sugere a vaga para trabalhadores que atendam aos requisitos.

## 3. Fluxos
1. **Criação de Vaga**: Dados básicos -> Localização -> Data/Hora -> Valores -> Requisitos -> Publicação.
2. **Ciclo de Candidatura**: Trabalhador se candidata -> Empresa/Coordenador analisa -> Aprovação/Reprovação.
3. **Gestão de Vagas**: Visualizar dashboard de preenchimento (ex: 8/10 vagas ocupadas).
4. **Cancelamento**: Regras de reembolso ou multa para a empresa caso cancele em cima da hora.

## 4. Permissões
- **Company/Coordinator**: Criar, editar, encerrar e gerenciar candidaturas.
- **Worker**: Visualizar e candidatar-se.

## 5. Dependências
- **Módulos**: Company, Coordinator, Worker, Wallet.
- **Serviços**: Geocoding (Google Maps/Mapbox) para localização.

## 6. APIs Necessárias
- `POST /jobs`: Criar nova vaga.
- `GET /jobs/{id}`: Detalhes da vaga.
- `PUT /jobs/{id}`: Editar vaga.
- `GET /jobs/{id}/applications`: Listar candidatos.
- `PATCH /jobs/{id}/application/{appId}/status`: Mudar status da candidatura (Aprovado/Recusado).

## 7. Eventos de Domínio
- `JobCreated`: Vaga publicada.
- `JobFullyStaffed`: Todas as vagas preenchidas.
- `JobCancelled`: Vaga cancelada pela empresa.

## 8. Casos de Uso
- **UC13**: Criar vaga recorrente para múltiplos dias de evento.
- **UC14**: Filtrar candidatos por avaliações anteriores.
- **UC15**: Reabrir vaga em caso de desistência de trabalhador.

## 9. Critérios de Aceite
- O valor total da vaga (vagas * valor unitário + taxas) deve ser provisionado no ato da criação.
- A descrição da vaga deve suportar formatação básica (Markdown).
- Mudanças críticas na vaga (data/local) após aprovações devem notificar todos os envolvidos.
