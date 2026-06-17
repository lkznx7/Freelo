# Relatório de Auditoria Completa - Freelo (Escala Fácil)

## 1. Visão Geral do Sistema
O sistema "Freelo" (nome comercial) ou "Escala Fácil" (nome técnico do backend) é uma plataforma de marketplace e gestão de staff para eventos. Ele conecta empresas (Companies) que precisam de mão de obra temporária com profissionais (Workers) qualificados.

## 2. Módulos Identificados
- **Auth**: Gestão de autenticação e perfis.
- **User/Profile**: Gerenciamento de dados de Workers e perfis públicos.
- **Company**: Gestão de empresas, dashboards e estatísticas.
- **Jobs/Services**: Publicação e busca de vagas de freela.
- **Applications**: Fluxo de candidatura e seleção de profissionais.
- **Events**: Organização de eventos e escalas.
- **Schedule/Escala**: Designação de profissionais para turnos específicos.
- **Attendance**: Controle de presença (Check-in/Check-out) via geolocalização.
- **Financial/Wallet**: Gestão de pagamentos, saldo e transações via PIX.
- **Reviews**: Sistema de avaliação bidirecional.
- **Notifications**: Alertas de convites, pagamentos e aprovações.
- **Chat**: Comunicação direta entre staff e empresa.

## 3. Entidades Principais
- **User (Worker)**: Profissional que presta serviços.
- **Company**: Empresa que publica vagas e organiza eventos.
- **Coordinator**: Profissional de confiança da empresa que supervisiona o staff on-site.
- **Promoter**: Profissional focado em vendas e engajamento.
- **Event**: O evento físico onde o trabalho ocorre.
- **Job**: A vaga específica dentro de um evento.
- **Application**: O registro da intenção de um worker em trabalhar em uma vaga.
- **Schedule (Escala)**: A confirmação de um worker em uma vaga/evento.
- **Attendance**: O registro de presença real.
- **Review**: A avaliação após o serviço.
- **Transaction**: Registro financeiro de ganhos ou débitos.
- **Notification**: Mensagem de sistema para o usuário.

## 4. Fluxos Críticos
1. **Onboarding**: Registro diferenciado para Worker e Company.
2. **Ciclo de Vaga**: Criação -> Publicação -> Candidatura -> Aprovação -> Escala.
3. **Execução**: Check-in -> Trabalho -> Check-out -> Verificação de Coordenador.
4. **Financeiro**: Finalização de Evento -> Liberação de Pagamento -> Saque via PIX.
5. **Feedback**: Avaliação mútua para manter a qualidade do marketplace.

## 5. Integrações Necessárias
- **Gateway de Pagamento (PIX)**: Para processamento de transações.
- **Serviço de Mapas/Geolocalização**: Para validação de check-in.
- **Serviço de Notificações Push/Email**: Para engajamento.
- **Storage (S3/Cloudinary)**: Para fotos de perfil e documentos.

## 6. Status do Frontend
- Altamente funcional com dados mockados.
- UI baseada em Tailwind CSS 4 e Shadcn/UI.
- Dashboards específicos para cada papel de usuário (Worker, Company, Coordinator, Promoter).
