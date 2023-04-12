const { Router } = require('express');
const catController = require('../controllers/cat.controller');
const { tokenValidation } = require('../middlewares/tokenValidation');

const catRouter = Router();

catRouter.get('/', tokenValidation, catController.getAllCats);

module.exports = catRouter;