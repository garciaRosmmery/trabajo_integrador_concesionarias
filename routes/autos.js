const express = require('express');
const router = express.Router();

const autosController = require('../controllers/autosController');
router.get('/', autosController.index);
router.get('/:marca', autosController.filtrar_por_marca);
router.get('/:marca/:dato?', autosController.filtrar_por_dato);

module.exports = router;
