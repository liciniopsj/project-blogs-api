const { userSchema } = require('./schemas/userSchema');
const userService = require('../services/user.service');

const userValidationRequest = ({ displayName, email, password, image }) => {
  const { error } = userSchema.validate({ displayName, email, password, image });

  if (error) return { message: error.message };

  return { message: '' };
};

const validateUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const uniqueUser = await userService.getUserByEmail(email);

  const validation = userValidationRequest({ displayName, email, password, image });

  if (uniqueUser !== null) return res.status(409).json({ message: 'User already registered' });

  if (validation.message) return res.status(400).json(validation);

  next();
};

module.exports = {
  validateUser,
};