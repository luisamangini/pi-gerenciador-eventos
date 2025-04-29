# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Autor do projeto

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

Organizar eventos e compromissos é parte essencial da vida acadêmica, profissional e pessoal. No entanto, em meio a tantos prazos, inscrições e deslocamentos, é comum se perder em detalhes importantes: esquecer documentos, perder o prazo de uma inscrição ou chegar atrasado por não ter previsto o trânsito. Pensando em resolver essas dores reais e cotidianas, este projeto propõe o desenvolvimento de uma plataforma inteligente para gerenciamento de eventos e compromissos.
A solução vai além da simples inscrição em eventos: ela centraliza prazos importantes, permite salvar links de inscrições externas, organiza lembretes personalizados sobre o que fazer ou levar antes de cada evento, integra-se com o calendário e o e-mail do usuário, e facilita o deslocamento através da integração com aplicativos de GPS. Além disso, permite visualizar quem também confirmou presença, ajudando a planejar interações sociais de forma mais natural e evitando desconfortos.
Com uma interface intuitiva, categorização de eventos por temas e prioridade, lembretes práticos e gestão de informações relevantes em um único lugar, a plataforma visa não apenas lembrar o usuário de seus compromissos, mas transformar toda a experiência de participação em eventos em algo mais organizado, eficiente e agradável.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)
Anna Peixoto tem 21 anos, é estudante universitária e estagiária de marketing. No seu dia a dia, utiliza constantemente aplicativos de calendário, redes sociais e ferramentas de organização para tentar manter sua rotina sob controle. Participa ativamente de eventos acadêmicos, cursos online e também está sempre envolvida em processos seletivos em busca de oportunidades de carreira.
Apesar do esforço para se manter organizada, Anna sente dificuldade em lidar com a quantidade de informações espalhadas em diferentes plataformas. Já perdeu prazos de inscrição para vestibulares e cursos importantes, esqueceu documentos essenciais em eventos e, por vezes, sentiu-se perdida tentando acompanhar todos os preparativos necessários.
Para resolver esses problemas, ela precisa de uma ferramenta que centralize inscrições de eventos, prazos importantes, documentos a serem levados e lembretes personalizados, com integração simples ao seu calendário e e-mail. Uma plataforma que, além de organizar suas tarefas e compromissos, também facilite o deslocamento para eventos e ajude a reduzir o estresse de perder prazos e informações importantes.


![Imagem de exemplo](assets/tpne.jpg)

### 2.2. User Stories (Semana 01)

USER STORY 01 | Como usuária, quero visualizar eventos organizados por categorias e níveis de prioridade, para encontrar de forma rápida os que mais combinam com meu interesse e com a minha disponibilidade.
USER STORY 02 | Como usuária, quero receber lembretes personalizados sobre tarefas ou documentos que preciso preparar antes de um evento, para garantir que esteja completamente pronta e evitar esquecimentos.
USER STORY 03 | Como usuária, quero integrar os eventos confirmados diretamente ao meu calendário pessoal e e-mail, para não correr o risco de esquecer compromissos importantes.
USER STORY 04 | Como usuária, quero ver quem confirmou presença nos eventos, para me sentir mais confortável em participar e evitar situações desconfortáveis.
USER STORY 05 | Como usuária, quero acessar facilmente o endereço do evento e receber alertas sobre o trânsito até o local, para conseguir me planejar melhor e chegar no horário.
USER STORY 06 | Como usuária, quero adicionar links de inscrições e associar prazos importantes dentro da plataforma, para não perder oportunidades de cursos, vestibulares ou eventos que sejam relevantes para o meu crescimento acadêmico e profissional.


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

*Posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário.*

*Posicione também o modelo físico com o Schema do BD (arquivo .sql)*

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

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


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
