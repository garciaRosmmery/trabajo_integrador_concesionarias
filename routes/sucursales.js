const express = require('express');
const router = express.Router();

const sucursalesController = require('../controllers/sucursalesController');

router.get('/', sucursalesController.index);
router.get('/:sucursal', sucursalesController.detalle_sucursal);

module.exports = router;