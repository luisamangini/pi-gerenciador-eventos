const db = require('../models/eventRequirementModel');

class EventReminderModel {
  // Listar todos os lembretes de um evento
  static async getByEventId(eventId) {
    const result = await db.query(
      'SELECT * FROM event_reminders WHERE event_id = $1',
      [eventId]
    );
    return result.rows;
  }

  // Criar um novo lembrete
  static async create({ event_id, message, remind_at }) {
    const result = await db.query(
      'INSERT INTO event_reminders (event_id, message, remind_at) VALUES ($1, $2, $3) RETURNING *',
      [event_id, message, remind_at]
    );
    return result.rows[0];
  }

  // Deletar lembrete
  static async delete(id) {
    await db.query('DELETE FROM event_reminders WHERE id = $1', [id]);
  }
}

module.exports = EventReminderModel;
