const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/userValidation');

const userRouter = Router();

userRouter.post('/', validateUser, userController.createUser);

module.exports = userRouter;