const express = require('express');

const user_communitiesController = require('../controller/user_communities');

const router = express.Router();

router.get('/', user_communitiesController.getAll);

router.get('/:id', user_communitiesController.getByid);

router.get('/user/:user_id', user_communitiesController.getByuserid);

router.get('/communities/:community_id', user_communitiesController.getBycommunitiesid);

router.post('/', user_communitiesController.createNew);

router.delete('/:id', user_communitiesController.deleteusercommuniites);

router.post('/:id', user_communitiesController.update);

module.exports = router;