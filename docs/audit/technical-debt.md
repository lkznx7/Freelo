# Dívida Técnica e Melhorias - Freelo Frontend

## 1. Dados Mockados (Hardcoded)
- **Status**: Crítico
- **Descrição**: Quase todas as páginas (`/dashboard`, `/jobs`, `/wallet`) utilizam constantes locais para exibir dados.
- **Impacto**: O sistema é funcional apenas como protótipo. Não há persistência ou dinamismo real.
- **Ação**: Implementar hooks do TanStack Query integrados aos serviços da API.

## 2. Estrutura de Features Vazia
- **Status**: Médio
- **Descrição**: Pastas como `src/features/auth/services`, `types` e `hooks` estão criadas mas vazias.
- **Impacto**: A lógica de negócio está espalhada diretamente nos componentes das páginas ou inexistente.
- **Ação**: Mover a lógica de estado e chamadas de API para dentro dos módulos de features.

## 3. Gestão de Estado de Autenticação
- **Status**: Alto
- **Descrição**: Não foi identificado um Context Provider ou Store (Zustand/Redux) para gerenciar o estado global do usuário autenticado.
- **Impacto**: Dificuldade em proteger rotas e exibir dados do usuário logado de forma consistente.
- **Ação**: Criar um `AuthContext` ou utilizar a integração do TanStack Query para gerenciar a sessão.

## 4. Duplicação de Lógica de Layout
- **Status**: Baixo
- **Descrição**: O `DashboardLayout` contém condicionais para 4 perfis diferentes.
- **Impacto**: O arquivo tende a crescer e se tornar um "God Component".
- **Ação**: Refatorar para sub-layouts ou componentes de menu especializados injetados via composição.

## 5. Falta de Testes
- **Status**: Médio
- **Descrição**: Ausência de diretório de testes (`__tests__`) ou configuração de Vitest/Cypress.
- **Impacto**: Regressões visuais e de lógica são prováveis em futuras refatorações.
- **Ação**: Implementar testes unitários para componentes críticos e E2E para fluxos de cadastro e pagamento.

## 6. Validação de Formulários
- **Status**: Baixo
- **Descrição**: Embora `react-hook-form` e `zod` estejam instalados, sua aplicação em fluxos complexos de cadastro (multi-step) ainda não foi verificada.
- **Ação**: Padronizar esquemas de validação em arquivos compartilhados.