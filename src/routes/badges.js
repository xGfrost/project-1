const express = require('express');

const badgesController = require('../controller/badges');

const router = express.Router();

router.post('/', badgesController.createNewbadges);

router.get('/', badgesController.getAllbadges);

router.post('/:idbadges', badgesController.updatebadges);

router.delete('/:idbadges', badgesController.deletebadges);


module.exports = router;