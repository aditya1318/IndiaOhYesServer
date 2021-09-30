// Importing modules
const
    Booking = require('../models/bookingModel'),
    factory = require('./handlerFactory');

// Controllers
exports.createBooking = factory.createOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.getBooking = factory.getOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);