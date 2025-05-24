const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Listar todos os eventos
router.get('/', eventController.getAll);

// Buscar evento por ID
router.get('/:id', eventController.getById);

// Criar novo evento
router.post('/', eventController.create);

// Atualizar evento
router.put('/:id', eventController.update);

// Deletar evento
router.delete('/:id', eventController.remove);

module.exports = router;
