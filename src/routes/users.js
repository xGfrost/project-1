const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();

// CREATE~POST
router.post('/', UserController.createNewUser);

// READ~GET
router.get('/', UserController.getAllUsers);

//UPDATE~PATCH
router.post('/:idUser', UserController.updateUser);

// DELETE~DELETE
router.delete('/:idUser', UserController.deleteUser);

// USER BADGES
router.get('/:idUser', UserController.getuserbyid);

module.exports = router;