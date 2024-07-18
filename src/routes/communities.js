const express = require('express');

const communitiesController = require('../controller/communities');

const router = express.Router();

router.get('/', communitiesController.getAll);

router.get('/:id', communitiesController.getByid)

router.get('/user/:user_id', communitiesController.getByuserid)

router.post('/', communitiesController.createNew);

router.post('/:id', communitiesController.update);

router.delete('/:id', communitiesController.deleteCommunities);

module.exports = router;