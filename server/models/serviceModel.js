const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A service must have a title'],
        unique: true
    },

    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'A service must have a category'],
    },

   

    summary: {
        type: String,
        required: [true, 'A service must have a summary']
    },

    description: {
        type: String,
        required: [true, 'A service must have a description']
    },

    image: {
        type: String,
        required: [true, 'A service must have an image']
    },

    slug: {
        type: String,
        index: true
    }
});

module.exports = mongoose.model('Service', serviceSchema);