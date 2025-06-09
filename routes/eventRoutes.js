const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Rota para renderizar a página de eventos (EJS)
router.get('/visual', eventController.renderEventosView);

// Rota para renderizar o formulário de criação de evento
router.get('/new', (req, res) => {
  res.render('pages/form'); // views/pages/form.ejs
});

// API Routes for Event Management
router.get('/', eventController.getAll);
router.get('/:id', eventController.getById);
router.post('/', eventController.create);
router.put('/:id', eventController.update);
router.delete('/:id', eventController.remove);

module.exports = router;
