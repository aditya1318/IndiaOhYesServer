const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({

    service_id:{
      type: mongoose.Schema.ObjectId,
      ref: 'Service',
      required: [true, 'A package must have a service ID']
    },
    title: {
        type: String,
        required: [true, 'A package must have a title']
    },

    price: {
        type: Number,
        required: [true, 'A package must have a price']
    },

    points: {
        type: [String],
        validate: {
            validator: val => val?.length,
            message: 'A package must have atleast one point'
        }
    }
});

module.exports = mongoose.model('Package', packageSchema);