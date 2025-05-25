const CategoryModel = require('../models/categoryModel');

exports.getAll = async (req, res) => {
  try {
    const categories = await CategoryModel.getAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
