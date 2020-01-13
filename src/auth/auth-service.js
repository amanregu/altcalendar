const jwt = require('jsonwebtoken');

const authService = {
  login(user, password) {
    const isAuthenticated = user.comparePassword(password);

    if (!isAuthenticated) {
      return false;
    }

    const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
    return { token, user };
  },
};

module.exports = authService;
