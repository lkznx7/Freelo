# Projeto: Freelo

**Responsável:**
Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

# Domínio e Módulos - Freelo

Este documento consolida as entidades e módulos do sistema, definindo as regras de negócio e perfis de acesso.

## 1. Perfis de Usuário (Roles)
O sistema possui 5 perfis principais, cada um com seu próprio dashboard e permissões:

- **Worker (Profissional):** Busca vagas, candidata-se, gerencia agenda e carteira.
- **Company (Empresa):** Cria vagas, contrata profissionais, gerencia eventos e pagamentos.
- **Coordinator (Coordenador):** Supervisiona equipes no local do evento, gerencia presença (check-in/out).
- **Promoter (Promotor):** Focado em vendas e marketing de eventos específicos.
- **Admin (Administrador):** Gestão global do sistema, suporte e auditoria.

## 2. Entidades Principais

### Usuário (User/Worker)
Representa qualquer pessoa cadastrada no sistema.
- **Atributos:** Nome, Email, CPF/CNPJ, Telefone, Avatar, Biografia, Skills, Avaliação.

### Vaga (Job)
Representa uma oportunidade de trabalho em um evento.
- **Atributos:** Título, Descrição, Data/Hora, Localização, Valor (Cachê), Número de Vagas, Categoria.
- **Status:** Aberta, Em Andamento, Finalizada, Cancelada.

### Evento (Event)
Agrupador de várias vagas para uma mesma ocasião.
- **Atributos:** Nome, Descrição, Data Início, Data Fim, Empresa Responsável.

### Carteira (Wallet)
Gerenciamento financeiro de pagamentos e recebimentos.
- **Atributos:** Saldo, Histórico de Transações, Status de Pagamento.

## 3. Módulos do Sistema
O sistema é dividido em módulos lógicos que serão implementados no backend (Spring Modulith):

- **Auth:** Autenticação e Autorização (JWT).
- **Users:** Gestão de perfis e preferências.
- **Jobs:** Ciclo de vida das vagas e candidaturas.
- **Events:** Gestão de eventos e escalas.
- **Wallet:** Processamento de pagamentos e histórico financeiro.
- **Chat:** Comunicação entre empresas e profissionais.
- **Notifications:** Avisos push e e-mail sobre novas vagas e status de contratação.
- **Reviews:** Sistema de avaliação mútua após a finalização do serviço.
