const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJWT = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const createCredentials = (email) => {
  const userEmail = { email };
  const token = jwt.sign(userEmail, secretKey, configJWT);
  // console.log(token);
  return token;
};

const validateToken = (token) => {
    const isValid = jwt.verify(token, secretKey);
    return isValid;
};

const auth = {
  createCredentials,
  validateToken,
};

module.exports = auth;
