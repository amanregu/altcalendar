const appointmentDAL = require('./appointment-DAL');
const userService = require('../users/users-service');

const appointmentService = {
  async register(agent, appointmentDetails) {
    const appointment = await appointmentDAL.register(appointmentDetails);
    await userService.findOneAndUpdate({ email: agent.email }, appointment.id);
    return appointment;
  },
  async updateDetails(appointmentId, update) {
    return appointmentDAL.updateDetails(appointmentId, update);
  },
  async delete(appointmentId) {
    return appointmentDAL.delete(appointmentId);
  },
};

module.exports = appointmentService;
