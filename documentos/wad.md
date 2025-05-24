# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## <a name="c1"></a>1. Introdução (Semana 01)

Organizar eventos e compromissos é uma parte essencial da vida acadêmica, profissional e pessoal. No entanto, em meio a tantos prazos, inscrições e deslocamentos, é comum se perder em detalhes importantes: esquecer documentos, perder o prazo de uma inscrição ou chegar atrasado por não ter previsto o trânsito.
Pensando em resolver essas dores reais e cotidianas, este projeto propõe o desenvolvimento de uma plataforma inteligente, segura e totalmente individual para o gerenciamento de eventos e compromissos. A solução vai além da simples inscrição: ela permite centralizar prazos importantes, salvar links de inscrições externas, organizar lembretes personalizados sobre o que fazer ou levar antes de cada evento e facilitar o deslocamento através da integração com aplicativos de GPS.
Como forma de garantir a privacidade da usuária, o acesso à plataforma é protegido por senha, garantindo que apenas ela possa visualizar e editar seus compromissos. Com uma interface intuitiva, categorização de eventos por temas e prioridade, e gestão centralizada de informações relevantes, o sistema visa não apenas lembrar a usuária de seus compromissos, mas transformar toda a experiência de participação em eventos em algo mais organizado, prático e sem estresse.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)
Anna Peixoto tem 21 anos, é estudante universitária e estagiária de marketing. No seu dia a dia, utiliza constantemente aplicativos de calendário, redes sociais e ferramentas de organização para tentar manter sua rotina sob controle. Participa ativamente de eventos acadêmicos, cursos online e também está sempre envolvida em processos seletivos em busca de oportunidades de carreira.
Apesar do esforço para se manter organizada, Anna sente dificuldade em lidar com a quantidade de informações espalhadas em diferentes plataformas. Já perdeu prazos de inscrição para vestibulares e cursos importantes, esqueceu documentos essenciais em eventos e, por vezes, sentiu-se perdida tentando acompanhar todos os preparativos necessários.
Para resolver esses problemas, ela precisa de uma ferramenta que centralize inscrições de eventos, prazos importantes, documentos a serem levados e lembretes personalizados, com integração simples ao seu calendário e e-mail. Uma plataforma que, além de organizar suas tarefas e compromissos, também facilite o deslocamento para eventos e ajude a reduzir o estresse de perder prazos e informações importantes.


![Imagem de exemplo](../assets/tpne.jpg)

### 2.2. User Stories (Semana 01)

USER STORY 01 | Como usuária, quero visualizar eventos organizados por categorias e níveis de prioridade, para encontrar de forma rápida os que mais combinam com meu interesse e com a minha disponibilidade.
USER STORY 02 | Como usuária, quero receber lembretes personalizados sobre tarefas ou documentos que preciso preparar antes de um evento, para garantir que esteja completamente pronta e evitar esquecimentos.
USER STORY 03 | Como usuária, quero integrar os eventos confirmados diretamente ao meu calendário pessoal e e-mail, para não correr o risco de esquecer compromissos importantes.
USER STORY 04 | Como usuária, quero acessar facilmente o endereço do evento e receber alertas sobre o trânsito até o local, para conseguir me planejar melhor e chegar no horário.
USER STORY 05 | Como usuária, quero adicionar links de inscrições e associar prazos importantes dentro da plataforma, para não perder oportunidades de cursos, vestibulares ou eventos que sejam relevantes para o meu crescimento acadêmico e profissional.


User Story analisada: Como usuária, quero adicionar links de inscrições e associar prazos importantes dentro da plataforma, para não perder oportunidades de cursos, vestibulares ou eventos que sejam relevantes para o meu crescimento acadêmico e profissional.

Independente- A funcionalidade de adicionar links é independente das demais funções da plataforma, como confirmação de presença em eventos ou criação de lembretes. O usuário pode adicionar links e prazos a qualquer momento, sem depender de outros fluxos.

Negociável- A maneira como os links e prazos são inseridos pode ser adaptada conforme o desenvolvimento da aplicação, permitindo, por exemplo, a adição de categorias para organizar melhor as inscrições ou até integrações automáticas futuras.

Valiosa- Essa funcionalidade reduz drasticamente o risco de perda de prazos importantes para inscrições em vestibulares, cursos e eventos. Organizar essas informações em um único lugar gera valor real para a vida acadêmica e profissional do usuário.

Estimável- É possível estimar de forma clara o esforço para implementação: envolveria o desenvolvimento de campos para registro de links, prazos e alertas associados, além da integração desses lembretes ao calendário e notificações.

Small (Pequena)- Inserir e gerenciar links de inscrições é uma funcionalidade específica, de escopo reduzido, que pode ser desenvolvida de forma rápida e iterativa, sem grandes riscos de complexidade técnica.

Testável- A funcionalidade pode ser facilmente testada criando links e prazos fictícios, verificando se os lembretes são gerados corretamente e se os usuários conseguem acessar os sites informados dentro dos prazos estipulados.



---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

![Imagem de exemplo](../assets/Modelo-Banco.png)

```
-- 1. Usuários
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Categorias
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
);

-- 3. Prioridades
CREATE TABLE priorities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL UNIQUE,
  icon VARCHAR(100)
);

-- 4. Eventos (com campos de status e geolocalização)
CREATE TYPE event_status AS ENUM ('scheduled','cancelled','postponed','completed');

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  start_datetime TIMESTAMP NOT NULL,
  end_datetime TIMESTAMP,
  address VARCHAR(255),
  latitude  DECIMAL(9,6),
  longitude DECIMAL(9,6),
  maps_url VARCHAR(255),
  category_id INTEGER NOT NULL REFERENCES categories(id),
  priority_id INTEGER NOT NULL REFERENCES priorities(id),
  status event_status NOT NULL DEFAULT 'scheduled',
  registration_deadline DATE,
  created_by INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Template de requisitos/documentos de evento
CREATE TABLE event_requirements (
  id SERIAL PRIMARY KEY,
  event_id INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  description VARCHAR(255) NOT NULL  -- ex: "Levar RG", "Comprar ingresso"
);

-- 6. Lembretes do usuário para cada requisito
CREATE TABLE event_reminders (
  id SERIAL PRIMARY KEY,
  requirement_id INTEGER NOT NULL REFERENCES event_requirements(id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  remind_at TIMESTAMP,                   -- quando notificar
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(requirement_id, user_id)
);

-- 7. Participações / Inscrições
CREATE TABLE event_attendees (
  id SERIAL PRIMARY KEY,
  event_id INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(20) NOT NULL DEFAULT 'confirmed',
  registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(event_id, user_id)
);

-- 8. Integrações de usuário (Calendar & E-mail)
CREATE TABLE user_integrations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  provider VARCHAR(50) NOT NULL,           -- ex: 'google_calendar', 'outlook', 'smtp'
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 9. Sincronização de convites no calendário
CREATE TABLE calendar_syncs (
  id SERIAL PRIMARY KEY,
  event_id INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  integration_id INTEGER NOT NULL REFERENCES user_integrations(id),
  external_event_id VARCHAR(255) NOT NULL, -- ID gerado pelo provedor (iCal UID, etc)
  synced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(event_id, integration_id)
);

-- 10. Log de notificações enviadas
CREATE TABLE notification_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  event_id INTEGER REFERENCES events(id),
  type VARCHAR(50) NOT NULL,              -- 'email', 'push', 'calendar'
  status VARCHAR(20) NOT NULL,            -- 'sent', 'failed'
  payload JSONB,                          -- resposta da API / erro
  sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para otimizar buscas
CREATE INDEX idx_events_category ON events(category_id);
CREATE INDEX idx_events_priority ON events(priority_id);
CREATE INDEX idx_events_start    ON events(start_datetime);
CREATE INDEX idx_reminders_time  ON event_reminders(remind_at);

```

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)
## 3.3 Wireframes

Os wireframes abaixo representam as principais telas da aplicação web desenvolvida neste projeto, cobrindo de forma visual as funcionalidades descritas nas User Stories. O foco está na organização da interface, fluxo de navegação e apresentação clara das ações do usuário.

### Tela 1 – Dashboard (Tela Principal)
A primeira tela apresenta a listagem de eventos, com filtros por categoria e prioridade. Permite acesso direto ao calendário e à criação de novos eventos.
- **User Story atendida:** US01

### Tela 2 – Calendário Pessoal
Visual mensal dos compromissos marcados pelo usuário, com destaque por prioridade. Facilita o planejamento e a integração com o calendário pessoal.
- **User Stories atendidas:** US01, US03

### Tela 3 – Detalhes do Evento
Exibe informações completas do evento: nome, data, local, link de inscrição e lembretes personalizados. Possui botões para confirmar presença e adicionar ao calendário.
- **User Stories atendidas:** US02, US03, US04, US05, US06

### Tela 4 – Quem Vai
Mostra a lista de participantes confirmados, com opção de ocultar presença. Facilita a socialização e evita desconfortos sociais.
- **User Story atendida:** US04

As imagens dos wireframes estão a seguir:

### Tela 1 – Dashboard
![Tela 1 – Dashboard](./assets/wireframetela1)

### Tela 2 – Calendário Pessoal
![Tela 2 – Calendário](../assets/wireframetela2)

### Tela 3 – Detalhes do Evento
![Tela 3 – Detalhes do Evento](../assets/wireframetela3)

### Tela 4 – Quem Vai
![Tela 4 – Quem Vai](../assets/wireframetela4)


### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre assets/wireframetela4como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências


_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---
