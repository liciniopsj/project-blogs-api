const userService = require('../services/user.service');
const auth = require('../services/utils/authenticate');

const createUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    await userService.newUser(req.body);
    const token = auth.createCredentials(email);
    res.status(201).json({ token: `${token}` });
  } catch (error) {
    next(error);
  }
};

const userController = {
  createUser,
};

module.exports = userController;