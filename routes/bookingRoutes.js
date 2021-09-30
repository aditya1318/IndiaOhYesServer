const
    router = require('express').Router(),
    bookingController = require('../controllers/bookingController');

router
    .route('/')
    .get(bookingController.getAllBookings)
    .post(bookingController.createBooking);

router
    .route('/:id')
    .get(bookingController.getBooking)
    .patch(bookingController.updateBooking)
    .delete(bookingController.deleteBooking);

module.exports = router;