const userService = require('../src/users/users-service');

const authService = require('../src/auth/auth-service');

const authController = {
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await userService.findOneByField({ email });
      const response = await authService.login(user, password);
      if (!response) {
        return res.status(401).json({ error: 'Password didn\'t match.' });
      }
      return res.status(200).json(response);
    } catch (err) {
      return res.status(401).json({ error: 'Something went wrong' });
    }
  },
};

module.exports = authController;
