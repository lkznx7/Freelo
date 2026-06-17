# Roadmap de Melhorias - Freelo Frontend

## Fase 1: Fundação e Integração (Curto Prazo)
- [ ] **Auth Provider**: Implementar `AuthContext` com suporte a JWT e persistência em Cookies/LocalStorage.
- [ ] **API Client**: Configurar instância do Axios com interceptors para tratamento de erros 401/403.
- [ ] **TanStack Query Setup**: Criar a base de hooks para `useUser`, `useJobs` e `useWallet`.
- [ ] **Replace Mocks**: Substituir dados hardcoded nos dashboards por chamadas reais à API.

## Fase 2: Robustez e UX (Médio Prazo)
- [ ] **Error Boundaries**: Implementar componentes de Fallback para erros de renderização.
- [ ] **Skeletons Everywhere**: Garantir que cada Card/Lista tenha seu estado de Loading visual.
- [ ] **Multi-step Forms**: Refatorar o cadastro de empresa e trabalhador para fluxos guiados com barra de progresso.
- [ ] **Filtros Avançados**: Implementar busca de vagas por geolocalização, categoria e faixa salarial.

## Fase 3: Otimização e Escala (Longo Prazo)
- [ ] **Refatoração do DashboardLayout**: Separar menus e lógicas por role em arquivos menores.
- [ ] **Internationalization (i18n)**: Preparar o sistema para múltiplos idiomas (Português/Inglês).
- [ ] **PWA Support**: Adicionar manifesto e service workers para instalação no mobile.
- [ ] **Component Library Documentation**: Usar Storybook para documentar os componentes customizados do Freelo.

## Fase 4: Inteligência e Performance
- [ ] **Real-time Notifications**: Integração com WebSockets ou Firebase para alertas em tempo real.
- [ ] **Image Optimization**: Migrar placeholders para um CDN ou bucket de imagens otimizadas.
- [ ] **Performance Audit**: Garantir Core Web Vitals com pontuação acima de 90 em mobile.