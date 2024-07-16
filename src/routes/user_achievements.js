const express = require('express');

const user_achievementsController = require('../controller/user_achievements');

const router = express.Router();

router.get('/', user_achievementsController.getAll);

module.exports = router;