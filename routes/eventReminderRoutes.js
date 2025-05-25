const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventReminderController');

// Lembretes de um evento
router.get('/events/:id/reminders', controller.getByEvent);

// Criar lembrete
router.post('/reminders', controller.create);

// Deletar lembrete
router.delete('/reminders/:id', controller.remove);

module.exports = router;
