const userDAL = require('./users-DAL');

const UserService = {
  async signUp(user) {
    console.log(user, 'pt3');
    return userDAL.signUp(user);
  },
  async findOneByField(id) {
    return userDAL.findOneByField(id);
  },
  async findOneAndUpdate(id, update) {
    return userDAL.findOneAndUpdate(id, update);
  },
};

module.exports = UserService;
