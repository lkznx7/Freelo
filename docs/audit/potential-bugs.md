# Levantamento de Bugs Potenciais - Freelo Frontend

## 1. Fluxo de Cadastro (Register)
- **Problema**: Cadastros de trabalhador e empresa em rotas separadas (`/register/worker` e `/register/company`) podem compartilhar componentes de formulário sem tratamento adequado de tipos de conta.
- **Risco**: Envio de dados incorretos para o backend caso a validação do Zod não seja estritamente divergente para cada perfil.

## 2. Estados de Carregamento (Loading)
- **Problema**: Com a transição de dados mockados para chamadas assíncronas (API), muitas telas podem "piscar" ou quebrar se não houver tratamento de `isLoading`.
- **Risco**: Usuário tentar interagir com elementos não carregados, resultando em erros de "undefined" no console.

## 3. Responsividade em Dashboards
- **Problema**: O `DashboardLayout` usa `md:p-10`. Em tablets (768px - 1024px), o padding pode ser excessivo, deixando pouco espaço para o conteúdo dos cards.
- **Risco**: Sobreposição de textos ou cards saindo da área visível (overflow).

## 4. Persistência de Sessão
- **Problema**: Sem um middleware de autenticação robusto no Next.js, usuários podem acessar `/dashboard` sem estar logados (apenas via URL).
- **Risco**: Vazamento visual de interface protegida e erros ao tentar buscar dados de um usuário inexistente.

## 5. Notificações e Toast
- **Problema**: O componente `sonner` está instalado, mas o disparo de erros globais (ex: falha de rede) ainda não parece centralizado.
- **Risco**: Silêncio do sistema em caso de erros silenciosos na API, deixando o usuário sem feedback.

## 6. Sincronização de Chat
- **Problema**: Implementação de chat via HTTP simples pode causar atrasos na visualização de mensagens.
- **Risco**: Mensagens enviadas e não exibidas imediatamente (Race conditions), necessitando de WebSockets ou polling agressivo.