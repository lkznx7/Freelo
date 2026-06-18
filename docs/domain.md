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
O sistema é dividido em módulos lógicos que serão implementados no backend (Spring Modulith). Clique nos links abaixo para ver o detalhamento técnico de cada um:

1. [**Auth**](modules/auth.md): Identidade e Controle de Acesso.
2. [**Users**](modules/users.md): Gestão de Perfis e Preferências.
3. [**Jobs**](modules/jobs.md): Marketplace, Vagas e Candidaturas.
4. [**Events**](modules/events.md): Operação, Escalas e Equipes.
5. [**Wallet**](modules/wallet.md): Financeiro, Saldo e Pagamentos.
6. [**Chat**](modules/chat.md): Comunicação Direta.
7. [**Notifications**](modules/notifications.md): Alertas e Notificações.
8. [**Reviews**](modules/reviews.md): Reputação e Feedback.

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
