const catServices = require('../services/cat.service');

const getAllCats = async (_req, res) => {
  const cats = await catServices.getAllCategories();
  return res.status(200).json(cats);
};

module.exports = {
  getAllCats,
};