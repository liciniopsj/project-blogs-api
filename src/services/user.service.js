const { User } = require('../models');

const newUser = async ({ displayName, email, password, image }) => 
  User.create({ displayName, email, password, image });

const getUserByEmail = async (email) => {
  const data = await User.findOne({ where: { email } });
  return data;
};

const userService = {
  newUser,
  getUserByEmail,
};

module.exports = userService;