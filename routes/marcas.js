const express = require('express');
const router = express.Router();

const marcasController = require('../controllers/marcasController');
router.get('/', marcasController.index);
router.get('/:marca', marcasController.autos_por_marca);

module.exports = router;