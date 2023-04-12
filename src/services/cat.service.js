const { Category } = require('../models');

const getAllCategories = async () => {
  const data = await Category.findAll({ attributes: ['id', 'name'] });
  return data;
};

module.exports = {
  getAllCategories,
};