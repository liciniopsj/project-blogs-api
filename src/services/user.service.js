const { User } = require('../models');

const newUser = async ({ displayName, email, password, image }) => 
  User.create({ displayName, email, password, image });

const getUserByEmail = async (email) => {
  const data = await User.findOne({ where: { email } });
  return data;
};

const getAllUsers = async () => {
  const data = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return data;
};

const getUserById = async (id) => {
  const data = User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { id },
  });

  return data;
};

const userService = {
  newUser,
  getUserByEmail,
  getAllUsers,
  getUserById,
};

module.exports = userService;