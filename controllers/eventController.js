const EventModel = require('../models/eventModel');

// Listar todos os eventos
exports.getAll = async (req, res) => {
  try {
    const events = await EventModel.getAll();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar evento por ID
exports.getById = async (req, res) => {
  try {
    const event = await EventModel.getById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Evento não encontrado' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar novo evento
exports.create = async (req, res) => {
  try {
    const newEvent = await EventModel.create(req.body);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar evento
exports.update = async (req, res) => {
  try {
    const updatedEvent = await EventModel.update(req.params.id, req.body);
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar evento
exports.remove = async (req, res) => {
  try {
    await EventModel.delete(req.params.id);
    res.json({ message: 'Evento removido com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
