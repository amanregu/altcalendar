const userDAL = require('./users-DAL');

const UserService = {
  async signUp(user) {
    return userDAL.signUp(user);
  },
  async findOneByField(id) {
    return userDAL.findOneByField(id);
  },
  async findOneAndUpdate(filter, update) {
    let user = await userDAL.findOneByField(filter);
    console.log(user);
    user = user.appointmentTypes.push(update);
    console.log(user);
    return userDAL.findOneAndUpdate(filter, user);
  },
};

module.exports = UserService;
