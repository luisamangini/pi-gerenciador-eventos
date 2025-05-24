const db = require('../models/eventModel');

class EventModel {
  static async getAll() {
    const result = await db.query('SELECT * FROM events');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM events WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(event) {
    const campos = [
      'title', 'description', 'date', 'time', 'location',
      'signup_link', 'signup_deadline', 'priority', 'category_id', 'user_id'
    ];

    const values = campos.map(campo => event[campo]);

    const query = `
      INSERT INTO events (${campos.join(', ')})
      VALUES (${campos.map((_, i) => `$${i + 1}`).join(', ')})
      RETURNING *`;

    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async update(id, event) {
    const campos = [
      'title', 'description', 'date', 'time', 'location',
      'signup_link', 'signup_deadline', 'priority', 'category_id', 'user_id'
    ];

    const set = campos.map((campo, i) => `${campo} = $${i + 1}`).join(', ');
    const values = campos.map(campo => event[campo]);
    values.push(id); // para o WHERE

    const query = `UPDATE events SET ${set} WHERE id = $${values.length} RETURNING *`;

    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    await db.query('DELETE FROM events WHERE id = $1', [id]);
  }
}

module.exports = EventModel;