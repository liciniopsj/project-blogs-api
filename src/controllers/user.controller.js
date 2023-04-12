const userService = require('../services/user.service');
const auth = require('../services/utils/authenticate');

const createUser = async (req, res) => {
    const { email } = req.body;
    await userService.newUser(req.body);
    const token = auth.createCredentials(email);
    return res.status(201).json({ token: `${token}` });
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);
};

const userController = {
  createUser,
  getAllUsers,
  getUserById,
};

module.exports = userController;