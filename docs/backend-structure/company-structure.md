# Estrutura Backend: Módulo Empresa (Company)

## 1. Domain
### Entidades / Agregados
- **Company**: ID, UserId, CorporateName, TradeName, CNPJ, Industry, Website, Description, LogoUrl.
- **CompanyMember**: ID, CompanyId, UserId, Role (OWNER, MANAGER).

### Regras de Negócio (Domain Rules)
- O CNPJ deve ser único no sistema.
- Apenas membros com perfil OWNER podem convidar outros gestores.

## 2. Application
### Casos de Uso (Use Cases)
- `CreateCompany`: Registro inicial da empresa após Auth.
- `UpdateCompanyProfile`: Edição de dados corporativos.
- `InviteMember`: Adição de gestores à conta da empresa.
- `ValidateCNPJ`: Integração com API externa para verificar idoneidade.

## 3. Infrastructure
### Adapters
- `JpaCompanyRepository`: Persistência JPA.
- `ReceitaWsAdapter`: Integração externa para validação de CNPJ.

## 4. Presentation
### Endpoints
- `POST /api/v1/companies`
- `GET /api/v1/companies/{id}`
- `POST /api/v1/companies/invite`

## 5. Eventos de Domínio
- `CompanyCreated`: Disparado após criação.
- `MemberJoinedTeam`: Disparado quando um novo gestor aceita o convite.
