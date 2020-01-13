const Appointment = require('../../models/appointment');

const appointmentDAL = {
  async register(appointmentDetails) {
    return Appointment.create(appointmentDetails);
  },
};

module.exports = appointmentDAL;
