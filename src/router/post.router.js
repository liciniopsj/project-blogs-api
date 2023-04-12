const { Router } = require('express');
const postController = require('../controllers/post.controller');
const { tokenValidation } = require('../middlewares/tokenValidation');

const postRouter = Router();

postRouter.get('/', tokenValidation, postController.getAllPosts);

module.exports = postRouter;