const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();


router.post('/login', authController.login);

router.get('/me', authController.verifyUser, (req, res) => {
  res.json({ user: req.user });
});

router.get('*', (req, res) => {
  res.render('index', { title: 'NOT FOUND' });
});

module.exports = router;
