# Gerenciador de Eventos Pessoal

Este projeto é uma plataforma individual de gerenciamento de eventos, desenvolvida com foco em organização pessoal. A aplicação permite cadastrar eventos, definir lembretes personalizados, listar tarefas relacionadas (como levar documentos) e categorizar os compromissos por prioridade e tipo.

---

## Como rodar localmente

### Pré-requisitos

- Node.js instalado (versão 14 ou superior recomendada)
- PostgreSQL instalado e rodando localmente **ou** conta no [Supabase](https://supabase.com)
- Git instalado

---

### Passo a passo

#### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio 

---

Gerenciador de Eventos Pessoal
Este projeto é uma plataforma individual de gerenciamento de eventos, desenvolvida com foco em organização pessoal. A aplicação permite cadastrar eventos, definir lembretes personalizados, listar tarefas relacionadas (como levar documentos) e categorizar os compromissos por prioridade e tipo.

Como rodar localmente
Pré-requisitos
Node.js instalado (versão 14 ou superior recomendada)

PostgreSQL instalado e rodando localmente ou conta no Supabase

Git instalado

Passo a passo
1. Clone o repositório
bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instale as dependências
bash
Copiar
Editar
npm install
3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

env
Copiar
Editar
DATABASE_URL=sua-string-de-conexão-postgres
PORT=3000
4. Execute as migrações (se necessário)
Caso você tenha script de migrations:

bash
Copiar
Editar
npm run migrate
5. Inicie o servidor
bash
Copiar
Editar
npm start
6. Acesse no navegador
Página de listagem de eventos: http://localhost:3000/events/visual

Página de criação de novo evento: http://localhost:3000/events/new

Tecnologias utilizadas
Node.js

Express.js

EJS

PostgreSQL

CSS

Fetch API

Estrutura do projeto
bash
Copiar
Editar
/models       # Models de interação com o banco
/controllers  # Lógica de aplicação
/routes       # Rotas da aplicação
/views        # Templates EJS
/public       # Arquivos estáticos (CSS, imagens)
/config       # Configuração do banco de dados
/server.js    # Inicialização da aplicação



