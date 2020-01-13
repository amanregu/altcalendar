const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

/* GET users listing. */
router.post('/new', userController.signUp);

module.exports = router;
