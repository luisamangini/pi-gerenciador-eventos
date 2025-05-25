require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

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



