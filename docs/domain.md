# Projeto: Freelo

**Responsável:**
Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

# Domínio e Módulos - Freelo

Este documento define os limites de domínio e a organização modular do sistema Freelo. O MVP é composto estritamente por 8 módulos de negócio.

## 1. Perfis de Usuário (Users Module)
Todos os perfis abaixo são geridos dentro do módulo **Users**. Eles não são módulos independentes, mas sim papéis (Roles) com visões específicas no sistema:

- **Worker:** Profissional que busca e executa os serviços.
- **Company:** Empresa produtora que contrata e gerencia os eventos.
- **Coordinator:** Supervisor operacional de equipes (Gestão via módulo Events).
- **Promoter:** Profissional focado em ativações e vendas (Gestão via módulo Events/Jobs).

## 2. Módulos Oficiais do MVP

### 1. Auth
Controle de acesso centralizado.
- Login, Registro, Recuperação de Senha, JWT, RBAC (Role-Based Access Control).

### 2. Users
Gestão de identidades e perfis.
- Cadastro de Worker/Company, Edição de Perfil, Preferências, Documentação.

### 3. Jobs
Marketplace de oportunidades.
- Publicação de Vagas, Busca/Filtros, Candidaturas (Applications), Aprovação de Candidatos.

### 4. Events
Operação e execução de eventos.
- Planejamento de Eventos, Escalas de Trabalho (Schedules), Gestão de Equipes (Teams), Check-in/Check-out.

### 5. Wallet
Módulo financeiro.
- Saldo Disponível/Pendente, Extrato de Transações, Realização de Saques, Gestão de Chaves PIX.

### 6. Chat
Comunicação direta.
- Canais de conversa entre Contratante e Contratado, Histórico de Mensagens.

### 7. Notifications
Centro de alertas.
- Notificações de novos Convites, Aprovações, Pagamentos Liberados e Lembretes de Eventos.

### 8. Reviews
Sistema de reputação.
- Avaliações de 1 a 5 estrelas, Comentários de Performance, Ranking de Profissionais.

---

## 3. Matriz de Consolidação
| Conceito Antigo / Estrutura | Módulo Oficial |
| :--- | :--- |
| Application, Service | **Jobs** |
| Attendance, Schedule, Enterprise, Team | **Events** |
| User, Worker, Company, Coordinator | **Users** |
| Payment, Financial | **Wallet** |
| Evaluation | **Reviews** |
| Messaging | **Chat** |
| Notification | **Notifications** |
