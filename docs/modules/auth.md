# Módulo: Auth

**Responsável:** Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

## 1. Objetivo
Garantir a identidade e o controle de acesso dos usuários na plataforma Freelo, assegurando que apenas usuários autenticados e autorizados acessem recursos protegidos.

## 2. Responsabilidades
- **Autenticação:** Processo de login e validação de credenciais.
- **Registro:** Cadastro inicial de usuários (credenciais básicas).
- **Gestão de Sessão:** Emissão, validação e revogação de tokens JWT.
- **Segurança:** Refresh tokens, logout e controle de expiração.
- **Recuperação de Acesso:** Fluxos de "Esqueci minha senha" e alteração de senha.
- **Autorização:** Controle de permissões baseado em perfis (RBAC).

## 3. Não é responsabilidade
- Gerenciar informações de perfil (nome, foto, bio) -> **Módulo Users**.
- Gerenciar saldos ou pagamentos -> **Módulo Wallet**.
- Gerenciar candidaturas ou vagas -> **Módulo Jobs**.

## 4. Entidades Principais
- **UserCredentials:** Login (e-mail) e senha (hashed).
- **Role:** Perfil de acesso (Worker, Company, etc.).
- **Permission:** Ações específicas permitidas para cada Role.
- **Session:** Registro de sessões ativas (opcional, dependendo da estratégia de logout).

## 5. Casos de Uso
- **Autenticar Usuário:** Validar e-mail/senha e retornar token.
- **Registrar Novo Acesso:** Criar par de credenciais inicial.
- **Renovar Token:** Utilizar Refresh Token para obter novo Access Token.
- **Solicitar Recuperação de Senha:** Enviar e-mail com link/token de reset.

## 6. Eventos de Domínio
- **UserAuthenticated:** Produzido após login bem-sucedido.
- **UserRegistered:** Produzido após criação da conta (consumido por *Users* para criar perfil).
- **PasswordResetRequested:** Produzido ao solicitar recuperação.

## 7. Integrações
- **Users:** Para vincular as credenciais ao perfil do usuário.
- **Notifications:** Para envio de e-mails de recuperação e boas-vindas.

## 8. APIs Previstas
- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/refresh`
- `POST /auth/logout`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`
