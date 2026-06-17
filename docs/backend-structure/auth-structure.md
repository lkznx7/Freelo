# Estrutura Backend: Módulo Autenticação

## 1. Domain
### Entidades / Agregados
- **User**: ID, Email, PasswordHash, Role (WORKER, COMPANY, COORDINATOR, PROMOTER, ADMIN), Status (ACTIVE, PENDING, BLOCKED).
- **Session**: ID, UserId, RefreshToken, ExpiryDate, UserAgent.

### Regras de Negócio (Domain Rules)
- A senha deve ser criptografada antes da persistência (BCrypt).
- O e-mail deve ser validado para garantir formato correto.
- Um usuário bloqueado não pode gerar novos tokens.

## 2. Application
### Casos de Uso (Use Cases)
- `AuthenticateUser`: Valida credenciais e gera par de tokens JWT.
- `RegisterUser`: Cria nova conta com perfil específico.
- `RefreshToken`: Valida refresh token e emite novo access token.
- `ResetPassword`: Processa a troca de senha via token de segurança.

### Ports (Interfaces)
- `UserRepository`: Interface para persistência de usuários.
- `EmailService`: Interface para envio de e-mails de recuperação.

## 3. Infrastructure
### Adapters
- `JpaUserRepository`: Implementação usando Spring Data JPA.
- `JwtTokenProvider`: Lógica de geração e validação de JWT.
- `SmtpEmailAdapter`: Implementação de envio de e-mail via SMTP/AWS SES.

## 4. Presentation
### Endpoints
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/refresh`

## 5. Eventos de Domínio
- `UserCreatedEvent`: Publicado ao cadastrar novo usuário.
- `AuthenticationFailedEvent`: Publicado após X tentativas falhas (segurança).
