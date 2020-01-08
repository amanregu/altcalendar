const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true },
  skypeId: { type: String, required: true, unique: true },
  appointmentTime: { type: String, required: true },
  appointmentDuration: { type: String, required: true },
  appointmentMedium: { type: String, required: true },
  appointmentAgent: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
