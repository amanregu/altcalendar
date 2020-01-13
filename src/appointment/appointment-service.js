const appointmentDAL = require('./appointment-DAL');
const userService = require('../users/users-service');

const appointmentService = {
  async register(appointmentDetails) {
    const appointment = await appointmentDAL.register(appointmentDetails);
    await userService.findOneAndUpdate(appointment.agentId, appointment.id);
    return appointment;
  },
};

module.exports = appointmentService;
