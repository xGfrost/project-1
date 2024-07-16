const express =require('express');

const reportsController = require('../controller/waste_repost');

const router = express.Router();

router.get('/', reportsController.getAll);

router.post('/', reportsController.createNew);

router.post('/:idReports', reportsController.update);

module.exports = router;