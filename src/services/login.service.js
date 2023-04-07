const tokenJwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET_KEY = process.env.JWT_SECRET;

const loginService = async (email, password) => {
  const userInfo = await User.findOne({ where: { email, password } });
  if (!userInfo || password !== userInfo.password) {
    return { status: 400, message: 'Invalid fields' };
  }
  const data = { data: userInfo };
  const token = tokenJwt.sign(data, SECRET_KEY);
  
  return { status: 200, token };
};

module.exports = {
  loginService,
};