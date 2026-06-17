# Módulo: Empresa (Company)

## 1. Objetivo
Permitir que empresas gerenciem seu perfil corporativo, publiquem vagas de trabalho (jobs), gerenciem escalas de eventos e acompanhem a performance de seus coordenadores e promotores.

## 2. Regras de Negócio
- **Validação de CNPJ**: Toda empresa deve possuir um CNPJ válido e verificado.
- **Hierarquia**: Uma empresa pode ter múltiplos Coordenadores e Promotores vinculados.
- **Saldo/Crédito**: Para publicar vagas, a empresa deve ter saldo em carteira ou limite de crédito aprovado.
- **Visibilidade**: Perfis de empresas podem ser públicos para trabalhadores ou privados (apenas convite).

## 3. Fluxos
1. **Configuração de Perfil**: Logo -> Bio -> Endereço -> Documentação Fiscal.
2. **Gestão de Equipe**: Convidar Coordenador/Promotor -> Definir Permissões -> Acompanhar Atividades.
3. **Dashboard Executivo**: Visualização de gastos totais -> Vagas ativas -> Avaliação média da empresa.
4. **Verificação de Documentos**: Upload de documentos -> Análise administrativa -> Selo de Verificada.

## 4. Permissões
- **Admin da Empresa**: Acesso total a configurações, financeiro e equipe.
- **RH/Gestor**: Publicação de vagas e gestão de candidaturas.

## 5. Dependências
- **Módulos**: Autenticação, Carteira (Wallet), Jobs.
- **Backend**: AWS S3 (para documentos e logos).

## 6. APIs Necessárias
- `GET /company/profile`: Detalhes da empresa.
- `PUT /company/profile`: Atualizar dados.
- `POST /company/invite`: Convidar membro para a equipe.
- `GET /company/team`: Listar membros da equipe vinculada.
- `GET /company/stats`: Estatísticas de uso e gastos.

## 7. Eventos de Domínio
- `CompanyProfileUpdated`: Perfil da empresa alterado.
- `TeamMemberInvited`: Novo convite para coordenador ou promotor.
- `CompanyVerified`: Empresa aprovada pelo sistema administrativo.

## 8. Casos de Uso
- **UC04**: Configurar perfil corporativo completo.
- **UC05**: Convidar coordenador para gerenciar eventos.
- **UC06**: Visualizar relatório financeiro mensal.

## 9. Critérios de Aceite
- O CNPJ deve ser validado via API externa ou algoritmo de validação.
- O sistema deve impedir ações financeiras se a empresa não estiver verificada (opcional, dependendo da configuração).
- Logos de empresa devem ser otimizados para web.
