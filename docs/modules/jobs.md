# Módulo: Jobs

**Responsável:** Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

## 1. Objetivo
Gerenciar o marketplace de oportunidades, desde a publicação de vagas até a contratação final do profissional.

## 2. Responsabilidades
- **Gestão de Vagas:** Criação, edição, publicação e arquivamento de oportunidades.
- **Sourcing:** Busca e filtragem de vagas para profissionais.
- **Candidatura (Application):** Fluxo de aplicação de profissionais para vagas.
- **Triagem:** Processo de aprovação ou reprovação de candidatos pela empresa.
- **Contratação:** Formalização do vínculo para o evento específico.

## 3. Não é responsabilidade
- Gestão operacional do evento no local -> **Módulo Events**.
- Processamento financeiro do cachê -> **Módulo Wallet**.

## 4. Entidades Principais
- **Job:** A vaga em si (título, valor, local, requisitos).
- **Application:** O registro da candidatura de um Worker.
- **Hiring:** O registro de que um profissional foi selecionado e confirmou presença.

## 5. Casos de Uso
- **Publicar Vaga:** Empresa disponibiliza nova oportunidade.
- **Candidatar-se:** Profissional manifesta interesse.
- **Aprovar Candidato:** Empresa seleciona profissional para a vaga.
- **Confirmar Presença:** Profissional aceita a aprovação final.

## 6. Eventos de Domínio
- **JobPublished:** Notifica profissionais sobre novas oportunidades.
- **ApplicationReceived:** Notifica a empresa sobre novo interessado.
- **WorkerHired:** Notifica o profissional e gera pendência financeira na *Wallet*.

## 7. Integrações
- **Users:** Para validar se o perfil do candidato atende aos requisitos.
- **Notifications:** Para avisar sobre status da candidatura.
- **Wallet:** Para registrar a previsão de pagamento no momento da contratação.

## 8. APIs Previstas
- `GET /jobs` (Filtros: categoria, data, valor)
- `POST /jobs` (Create)
- `GET /jobs/{id}`
- `POST /jobs/{id}/apply`
- `GET /jobs/{id}/applications`
- `PATCH /applications/{id}/status` (Aprovar/Reprovar)
