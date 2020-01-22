/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

const userService = require('../src/users/users-service');

const authService = require('../src/auth/auth-service');

const authController = {
  async login(req, res) {
    const { username, password } = req.body;
    const email = username;
    try {
      const user = await userService.findOneByField({ email });
      const response = await authService.login(user, password);
      if (!response) {
        return res.status(403).json({ error: 'Password didn\'t match.' });
      }
      return res.status(200).json(response);
    } catch (err) {
      return res.status(401).json({ error: 'Something went wrong' });
    }
  },
  async verifyUser(req, res, next) {
    const token = req.headers.Authorization || req.headers.authorization;
    let userId = '';

    if (!token) {
      return res.status(403).json({ error: 'Not authorized.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedObj) => {
      if (err) {
        return res.status(403).json({ error: 'Not authorized.' });
      }
      // eslint-disable-next-line no-underscore-dangle
      userId = decodedObj._id;
    });
    const user = await userService.findOneByField({ _id: userId });
    req.user = user;
    next();
  },
};

module.exports = authController;
