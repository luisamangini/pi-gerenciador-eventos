const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para listar todos os usuários
router.get('/', userController.getAll);

// Rota para buscar usuário por ID
router.get('/:id', userController.getById);

// Rota para criar um novo usuário
router.post('/', userController.create);

// Rota para atualizar um usuário existente
router.put('/:id', userController.update);

module.exports = router;
