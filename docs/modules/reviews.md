# Módulo: Reviews

**Responsável:** Lucas Moreira - Engenheiro de Software / Arquiteto de Software

---

## 1. Objetivo
Promover a confiança e a meritocracia dentro do marketplace através de um sistema de avaliação mútua e reputação baseada em dados reais de serviço.

## 2. Responsabilidades
- **Coleta de Feedback:** Capturar notas e comentários após o término de um evento.
- **Cálculo de Reputação:** Gerar a média aritmética e rankings baseados nas avaliações.
- **Moderação:** Garantir que os feedbacks sejam profissionais.
- **Histórico:** Manter o registro de performance ao longo do tempo.

## 3. Não é responsabilidade
- Selecionar candidatos -> **Módulo Jobs**.
- Gerenciar currículo -> **Módulo Users**.

## 4. Entidades Principais
- **Review:** O depoimento escrito e a nota.
- **Rating:** A pontuação numérica (1-5 estrelas).

## 5. Casos de Uso
- **Avaliar Profissional:** Empresa dá nota ao Worker após o evento.
- **Avaliar Empresa:** Worker dá nota à Company.
- **Consultar Reputação:** Ver média e comentários de um usuário antes de contratar.

## 6. Eventos de Domínio
- **ReviewSubmitted:** Novo feedback registrado.
- **ReputationCalculated:** Atualização da média global do usuário (consumido por *Users*).

## 7. Integrações
- **Events:** Recebe sinal de que o evento acabou para habilitar a avaliação.
- **Users:** Atualiza o campo de "Avaliação Média" no perfil do usuário.

## 8. APIs Previstas
- `POST /reviews`
- `GET /reviews/user/{id}`
- `GET /reviews/event/{id}`
- `GET /reviews/top-rated`
