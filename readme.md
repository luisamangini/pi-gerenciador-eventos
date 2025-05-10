# Plataforma de Gerenciamento de Eventos e Compromissos

## Descrição do Sistema
A “Plataforma de Gerenciamento de Eventos e Compromissos” é uma aplicação web que ajuda o usuário (como a Anna, nossa persona) a organizar eventos, lembretes e confirmações de presença num único lugar. Principais funcionalidades:
- Listagem de eventos filtrável por categoria e prioridade  
- Detalhes de evento com descrição, endereço e link para abrir no Maps  
- Template de requisitos (ex: “Levar RG”) e lembretes personalizados  
- Confirmação de presença e visualização de quem mais vai  
- Integração com calendários externos (Google, Outlook) e envio de e-mails  
- Sincronização de convites e logs de notificações  

---

## Estrutura de Pastas e Arquivos
```
meu-projeto/
│
├── config/
│ └── db.js # Conexão com o banco de dados
│
├── controllers/
│ └── userController.js # Lógica de requisições de usuários
│
├── models/
│ └── userModel.js # Definição do modelo User
│
├── routes/
│ ├── frontRoutes.js # Rotas públicas (telas EJS)
│ └── userRoutes.js # APIs de usuário (JSON)
│
├── services/
│ └── userService.js # Regras de negócio de usuários
│
├── views/
│ ├── layouts/ # Layouts EJS (header, footer)
│ └── pages/ # Páginas principais (dashboard, detalhes)
│
├── public/
│ ├── assets/ # Imagens e fontes
│ ├── scripts/ # JS do front-end
│ └── styles/ # CSS / SCSS
│
├── tests/
│ └── example.test.js # Testes unitários (Jest)
│
├── .gitignore
├── .env.example # Exemplo de variáveis de ambiente
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md # Este arquivo
├── WAD.md # Wireframe & Diagrama (descrição abaixo)
├── server.js # Inicialização do Express
└── rest.http # Coleção de chamadas HTTP para teste
```

## Como Executar Localmente

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/SEU_USUARIO/seu-repo.git
   cd seu-repo
   ```

2. **Copie o `.env` e defina as variáveis**
   ```bash
   cp .env.example .env
   #Edite .env com as credenciais do seu banco e chaves de API
   ```

3. **Instale dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor**
   ```bash
   npm start
   ```

5. **Acesse no navegador**
   ```
   http://localhost:3000
   ```