const EventReminderModel = require('../models/eventReminderModel');

// GET /events/:id/reminders
exports.getByEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const reminders = await EventReminderModel.getByEventId(id);
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /reminders
exports.create = async (req, res) => {
  const { event_id, message, remind_at } = req.body;
  try {
    const newReminder = await EventReminderModel.create({ event_id, message, remind_at });
    res.status(201).json(newReminder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /reminders/:id
exports.remove = async (req, res) => {
  const { id } = req.params;
  try {
    await EventReminderModel.delete(id);
    res.status(200).json({ message: 'Lembrete deletado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
