const express = require('express');

const router = express.Router();

const appointmentController = require('../controllers/appointment');

/* Create new appointment */
router.post('/new', appointmentController.register);

// Reschedule existing appointment
router.post('/reschedule', appointmentController.reschedule);

// Delete appointment
router.post('/delete', appointmentController.delete);


module.exports = router;
