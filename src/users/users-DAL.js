const User = require('../../models/user');

const usersDAL = {
  async signUp(user) {
    console.log(user, 'pt6');
    return User.create(user);
  },
  async findOneByField(id) {
    return User.findOne(id);
  },
  async findOneAndUpdate(filter, update) {
    return User.findOneAndUpdate(filter, { $push: { appointmentTypes: update } });
  },
};

module.exports = usersDAL;
