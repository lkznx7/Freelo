# Módulo: Users

**Responsável:** Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

## 1. Objetivo
Gerenciar todas as informações de perfil, preferências e dados complementares dos diferentes tipos de usuários da plataforma.

## 2. Responsabilidades
- **Gestão de Perfis:** Cadastro e atualização de dados específicos para Worker, Company, Coordinator e Promoter.
- **Ativos de Mídia:** Gestão de avatar e fotos de perfil.
- **Curriculum/Portfolio:** Skills, experiência, biografia e portfólio para Workers.
- **Dados Institucionais:** CNPJ, descrição, site e localização para Companies.
- **Preferências:** Configurações de conta e filtros de interesse.

## 3. Não é responsabilidade
- Autenticação e tokens -> **Módulo Auth**.
- Gestão de candidaturas -> **Módulo Jobs**.
- Gestão de pagamentos -> **Módulo Wallet**.

## 4. Entidades Principais
- **User:** Entidade base de perfil.
- **WorkerProfile:** Dados específicos do profissional (Skills, CPF).
- **CompanyProfile:** Dados específicos da empresa (CNPJ, Razão Social).
- **CoordinatorProfile:** Dados de coordenação.
- **PromoterProfile:** Dados de promoção.

## 5. Casos de Uso
- **Atualizar Perfil:** Editar dados biográficos ou profissionais.
- **Consultar Perfil Público:** Visualização de perfil para recrutamento.
- **Gerenciar Skills:** Adicionar ou remover competências.
- **Configurar Preferências:** Ajustar notificações e visibilidade.

## 6. Eventos de Domínio
- **UserProfileUpdated:** Produzido ao alterar dados críticos.
- **UserPreferencesChanged:** Produzido ao alterar configurações.

## 7. Integrações
- **Auth:** Recebe evento de novo registro para instanciar o perfil inicial.
- **Reviews:** Consome a média de avaliação para exibir no perfil.

## 8. APIs Previstas
- `GET /users/me`
- `PUT /users/me`
- `GET /users/{id}`
- `PUT /users/me/avatar`
- `GET /users/search` (Busca de talentos)
