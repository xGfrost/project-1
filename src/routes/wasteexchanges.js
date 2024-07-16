const express = require('express');

const wasteexchangesController = require('../controller/wasteexchanges');

const router = express.Router();

router.post('/', wasteexchangesController.createNewwasteexchanges);

router.get('/', wasteexchangesController.getAllwasteexchanges);

router.get('/:user_id', wasteexchangesController.getByid);




module.exports = router;