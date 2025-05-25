const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventRequirementController');

// Requisitos de um evento
router.get('/events/:id/requirements', controller.getByEvent);

// Criar requisito
router.post('/requirements', controller.create);

// Deletar requisito (opcional)
router.delete('/requirements/:id', controller.remove);

module.exports = router;
