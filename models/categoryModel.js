const db = require('../models/categoryModel');

class CategoryModel {
  static async getAll() {
    const result = await db.query('SELECT * FROM categories');
    return result.rows;
  }
}

module.exports = CategoryModel;
