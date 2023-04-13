const { Router } = require('express');
const { tokenValidation } = require('../middlewares/tokenValidation');
const postController = require('../controllers/post.controller');

const postRouter = Router();

postRouter.get('/', tokenValidation, postController.getAllPosts);
postRouter.get('/:id', tokenValidation, postController.getPostById);

module.exports = postRouter;