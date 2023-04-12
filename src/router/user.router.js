const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/userValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

const userRouter = Router();

userRouter.post('/', validateUser, userController.createUser);
userRouter.get('/:id', tokenValidation, userController.getUserById);
userRouter.get('/', tokenValidation, userController.getAllUsers);

module.exports = userRouter;