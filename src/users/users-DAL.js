const User = require('../../models/user');

const usersDAL = {
  async signUp(user) {
    return User.create(user);
  },
  async findOneByField(id) {
    return User.findOne(id);
  },
  async findOneAndUpdate(filter, update) {
    return User.findOneAndUpdate(filter, update);
  },
};

module.exports = usersDAL;
