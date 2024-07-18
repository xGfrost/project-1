const express = require('express');

const cleaningservicesController = require('../controller/cleaning_services');

const router = express.Router();

router.get('/', cleaningservicesController.getAll);

router.get('/:user_id', cleaningservicesController.getByid);

router.post('/', cleaningservicesController.createnew);

router.post('/:idCleaningservices', cleaningservicesController.updatestatus);

module.exports = router;