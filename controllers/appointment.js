const appointmentService = require('../src/appointment/appointment-service');

const appointmentController = {
  async register(req, res) {
    const {
      name,
      email,
      phoneNumber,
      skypeId,
      appointmentTime,
      country,
      timeZone,
      appointmentDuration,
      appointmentMedium,
      agentId,
    } = req.body;
    try {
      if (!name
        || !email
        || !phoneNumber
        || !skypeId
        || !appointmentTime
        || !country
        || !timeZone
        || !appointmentDuration
        || !appointmentMedium
        || !agentId) {
        res.json({ status: false, message: 'all details are necessary' });
      }
      const appointmentDetails = {
        name,
        email,
        phoneNumber,
        skypeId,
        appointmentTime,
        country,
        timeZone,
        appointmentDuration,
        appointmentMedium,
        appointmentAgent,
      };
      return res.json({
        appointment: await appointmentService.register(appointmentDetails),
      });
    } catch (err) {
      return res.status(200).json(err);
    }
  },
};

module.exports = appointmentController;
