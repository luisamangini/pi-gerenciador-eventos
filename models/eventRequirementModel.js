const db = require('../models/eventRequirementModel');

class EventRequirementModel {
  // Lista todos os requisitos de um evento específico
  static async getByEventId(eventId) {
    const result = await db.query(
      'SELECT * FROM event_requirements WHERE event_id = $1',
      [eventId]
    );
    return result.rows;
  }

  // Cria um novo requisito para um evento
  static async create({ event_id, description }) {
    const result = await db.query(
      'INSERT INTO event_requirements (event_id, description) VALUES ($1, $2) RETURNING *',
      [event_id, description]
    );
    return result.rows[0];
  }

  // (Opcional) Deleta um requisito
  static async delete(id) {
    await db.query('DELETE FROM event_requirements WHERE id = $1', [id]);
  }
}

module.exports = EventRequirementModel;
