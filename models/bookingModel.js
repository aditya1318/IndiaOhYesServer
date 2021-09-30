const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A booking must belong to a user']
    },

    service: {
        type: mongoose.Schema.ObjectId,
        ref: 'Service',
        required: [true, 'A booking must have a service']
    },

    selectedPackages: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Package',
        validate: {
            validator: function () { return this.selectedPackages.length; },
            message: 'A service must be booked with atleast one package'
        }
    },

    dateAndTimeOfEvent: {
        type: Date,
        default: Date.now()
    },

    instructions: String,

    total: Number
});

bookingSchema.pre('save', async function (next) {
    try {
        await this.populate({ path: 'selectedPackages', select: 'title price' }).execPopulate();
        this.total = this.selectedPackages.reduce((acc, cur) => acc + cur.price, 0);
        next();
    }
    catch (err) {
        next(err);
    }
});

module.exports = mongoose.model('Booking', bookingSchema);