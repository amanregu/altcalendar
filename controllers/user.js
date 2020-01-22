const usersService = require('../src/users/users-service');

const userController = {
  async signUp(req, res) {
    const {
      firstName,
      lastName,
      email,
      password,
      country,
      phone,
    } = req.body;
    try {
      if (
        !firstName
        || !lastName
        || !email
        || !password
        || !country
        || !phone
      ) {
        return res.status(400).json({
          status: false,
          message: 'Please fill all Required data',
        });
      }
      const user = {
        firstName,
        lastName,
        email,
        password,
        country,
        phone,
      };
      return res.json({
        user: await usersService.signUp(user),
      });
    } catch (error) {
      return res.status(400).json({ status: false, error });
    }
  },
  async login(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(400).json({
          status: false,
          message: 'Please fill all Required data',
        });
      }
      return res.json({
        user: await usersService.login(email, password),
      });
    } catch (error) {
      return res.status(400).json({ status: false, error });
    }
  },
};

module.exports = userController;
