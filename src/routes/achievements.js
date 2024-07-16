const express = require('express');

const achievementsController = require('../controller/achievements');

const router = express.Router();

router.get('/', achievementsController.getAll);

router.post('/', achievementsController.createNew);

router.post('/:idAchievements', achievementsController.update);

router.delete('/:idAchievements', achievementsController.deleteAchievements);

module.exports = router;