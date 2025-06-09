require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração da view engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, imagens, etc)
app.use(express.static('public')); 

// Middleware para processar JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const eventRequirementRoutes = require('./routes/eventRequirementRoutes');
const eventReminderRoutes = require('./routes/eventReminderRoutes');

app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/categories', categoryRoutes);
app.use('/', eventRequirementRoutes); 
app.use('/', eventReminderRoutes);

// Rota inicial para teste
app.get('/', (req, res) => {
  res.send('API do Gerenciador de Eventos funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
