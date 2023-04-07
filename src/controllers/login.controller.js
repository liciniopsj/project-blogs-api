const { loginService } = require('../services/login.service');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const { status, token, message } = await loginService(email, password);
  if (!message) return res.status(status).json({ token });
  return res.status(status).json({ message });
};

module.exports = {
  loginController,
};