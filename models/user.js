/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  timeZone: { type: String, required: false },
  bookingUrl: { type: String, required: false, unique: false },
  phoneNo: { type: Number, required: false },
  skypeId: { type: String, required: false },
  aboutUser: { type: String, required: false },
  availableTimeSlots: { type: Array, required: false },
  appointmentTypes: { type: Array, required: false },
}, { timestamps: true });

userSchema.pre('save', function (next) {
  if (this.password) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
