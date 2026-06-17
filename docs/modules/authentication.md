# Módulo: Autenticação e Gestão de Acesso

## 1. Objetivo
Prover uma porta de entrada segura para os usuários, permitindo o cadastro diferenciado entre trabalhadores e empresas, além da gestão de sessões e recuperação de conta.

## 2. Regras de Negócio
- **Unicidade**: Um e-mail/CPF/CNPJ não pode ser duplicado no sistema.
- **Perfis**: O usuário deve escolher obrigatoriamente entre Worker, Company, Coordinator ou Promoter no ato do cadastro ou ser convidado.
- **Sessão**: Tokens JWT devem ter expiração curta (ex: 1h) com suporte a Refresh Token.
- **Segurança**: Senhas devem ter requisitos mínimos (8 caracteres, letras, números e símbolos).

## 3. Fluxos
1. **Cadastro de Trabalhador**: Dados pessoais -> Endereço -> Especialidades -> Validação de Documento.
2. **Cadastro de Empresa**: Dados corporativos -> CNPJ -> Responsável -> Validação.
3. **Login**: E-mail/Senha ou Social Login (futuro) -> Redirecionamento baseado no Role.
4. **Esqueci Senha**: Envio de link de recuperação por e-mail -> Nova senha.

## 4. Permissões
- **Público**: Login, Registro, Recuperação de Senha.
- **Autenticado**: Alterar perfil, trocar senha, gerenciar sessões ativas.

## 5. Dependências
- **Frontend**: `react-hook-form`, `zod`, `axios`.
- **Backend**: Serviço de Auth (Spring Security), Serviço de E-mail (SES/SendGrid).

## 6. APIs Necessárias
- `POST /auth/login`: Autenticação de usuário.
- `POST /auth/register/worker`: Registro de trabalhador.
- `POST /auth/register/company`: Registro de empresa.
- `POST /auth/refresh-token`: Renovação de sessão.
- `POST /auth/forgot-password`: Solicitação de recuperação.

## 7. Eventos de Domínio
- `UserRegisteredEvent`: Disparado após sucesso no cadastro.
- `LoginSuccessfulEvent`: Disparado após login bem-sucedido.
- `PasswordChangedEvent`: Disparado após alteração de senha.

## 8. Casos de Uso
- **UC01**: Realizar login com credenciais válidas.
- **UC02**: Cadastrar nova empresa com validação de CNPJ.
- **UC03**: Recuperar acesso via e-mail.

## 9. Critérios de Aceite
- O sistema deve redirecionar corretamente para o dashboard específico do perfil.
- Mensagens de erro claras devem ser exibidas para credenciais inválidas.
- O estado de autenticado deve persistir mesmo após o recarregamento da página (F5).