const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true },
  skypeId: { type: String, required: true, unique: true },
  appointmentTime: { type: String, required: true },
  country: { type: String, required: true },
  timeZone: { type: String, required: true },
  appointmentDuration: { type: String, required: true },
  appointmentMedium: { type: String, required: true },
  agentId: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
