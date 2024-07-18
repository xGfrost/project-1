const express = require('express');

const user_communitiesController = require('../controller/user_communities');

const router = express.Router();

router.get('/', user_communitiesController.getAll);

module.exports = router;