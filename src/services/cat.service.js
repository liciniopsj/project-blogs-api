const { Category } = require('../models');

const getAllCategories = async () => {
  const data = await Category.findAll({ attributes: ['id', 'name'] });
  return data;
};

const createCategory = async ({ name }) => Category.create({ name });

module.exports = {
  getAllCategories,
  createCategory,
};
