const db = require('../models/userModel');

class UserModel {
  // Buscar todos os usuários 
  static async getAll() {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
  }

  // Buscar por ID
  static async getById(id) {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  // Criar novo usuário
  static async create({ name, email, password }) {
    const result = await db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result.rows[0];
  }

  // Atualizar dados do usuário
  static async update(id, { name, email, password }) {
    const result = await db.query(
      'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
      [name, email, password, id]
    );
    return result.rows[0];
  }
}
module.exports = UserModel;
