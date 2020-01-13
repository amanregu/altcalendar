/* eslint-disable max-len */
// Todo: Move validations into separate files
const appointmentService = require('../src/appointment/appointment-service');
const userService = require('../src/users/users-service');

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
      if (
        !name
        || !email
        || !phoneNumber
        || !skypeId
        || !appointmentTime
        || !country
        || !timeZone
        || !appointmentDuration
        || !appointmentMedium
        || !agentId
      ) {
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
        agentId,
      };
      const agent = await userService.findOneByField({ _id: agentId });
      return res.json({
        appointment: await appointmentService.register(
          agent,
          appointmentDetails,
        ),
      });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async reschedule(req, res) {
    const updatedDetails = req.body;
    try {
      if (!updatedDetails) {
        res.json({ status: false, message: 'all details are necessary' });
      }
      res.status(200).json({
        appointment: await appointmentService.updateDetails(
          { email: updatedDetails.email },
          updatedDetails,
        ),
      });
    } catch (err) {
      res.json(err);
    }
  },
  async delete(req, res) {
    const { appointmentId } = req.body;
    try {
      if (!appointmentId) {
        res
          .status(400)
          .json({ status: false, message: 'all details are necessary' });
      }
      res
        .status(200)
        .json({
          status: true,
          message: 'deleted',
          appointment: appointmentService.delete(appointmentId),
        });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

module.exports = appointmentController;
