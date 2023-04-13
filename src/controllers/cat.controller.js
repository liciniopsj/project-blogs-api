const catServices = require('../services/cat.service');

const getAllCats = async (_req, res) => {
  const cats = await catServices.getAllCategories();
  return res.status(200).json(cats);
};

const createCat = async (req, res) => {
    const { name } = req.body;

    if (!name) {
    return res.status(400).json({ message: '"name" is required' });
    }

    const category = await catServices.createCategory(req.body);
    return res.status(201).json(category);
};

module.exports = {
  getAllCats,
  createCat,
};