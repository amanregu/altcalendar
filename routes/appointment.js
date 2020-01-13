const express = require('express');

const router = express.Router();

const appointmentController = require('../controllers/appointment');

/* GET home page. */
router.post('/new', appointmentController.register);

module.exports = router;
