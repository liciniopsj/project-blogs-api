const { Router } = require('express');
const { loginController } = require('../controllers/login.controller');
const { validateLoginInfo } = require('../middlewares');

const loginRouter = Router();

loginRouter.post('/', validateLoginInfo, loginController);

module.exports = loginRouter;