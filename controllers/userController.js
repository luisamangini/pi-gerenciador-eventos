const UserModel = require('../models/userModel');

// Listar todos os usuários
exports.getAll = async (req, res) => {
  try {
    const users = await UserModel.getAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar usuário por ID
exports.getById = async (req, res) => {
  try {
    const user = await UserModel.getById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar novo usuário
exports.create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await UserModel.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar usuário existente
exports.update = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const updatedUser = await UserModel.update(req.params.id, { name, email, password });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
