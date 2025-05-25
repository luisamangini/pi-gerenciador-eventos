const EventRequirementModel = require('../models/eventRequirementModel');

// GET /events/:id/requirements
exports.getByEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const requirements = await EventRequirementModel.getByEventId(id);
    res.json(requirements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /requirements
exports.create = async (req, res) => {
  const { event_id, description } = req.body;
  try {
    const newRequirement = await EventRequirementModel.create({ event_id, description });
    res.status(201).json(newRequirement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /requirements/:id
exports.remove = async (req, res) => {
  const { id } = req.params;
  try {
    await EventRequirementModel.delete(id);
    res.status(200).json({ message: 'Requisito deletado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
