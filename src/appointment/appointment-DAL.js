const Appointment = require('../../models/appointment');

const appointmentDAL = {
  async register(appointmentDetails) {
    return Appointment.create(appointmentDetails);
  },
  async updateDetails(appointmentId, update) {
    return Appointment.findOneAndUpdate(appointmentId, update, { new: true });
  },
  async delete(id) {
    return Appointment.deleteOne({ _id: id });
  },
};

module.exports = appointmentDAL;
