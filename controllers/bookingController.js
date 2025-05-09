const Booking = require('../models/Booking');
// const Activity = require('../models/Activity');

exports.bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;
    const booking = new Booking({ user: req.user.id, activity: activityId });
    await booking.save();
    res.status(201).json({ message: 'Activity booked' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('activity');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
