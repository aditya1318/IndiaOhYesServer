const
    mongoose = require('mongoose'),
    slugify = require('slugify'),
    capitalizeString = require('../utils/capitalize');

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

serviceSchema.pre('save', function (next) {
    // Capitalize title
    this.title = capitalizeString(this.title);

    // Create slug
    this.slug = slugify(this.title, {
        replacement: '-',
        lower: true
    });

    next();
});

serviceSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'category',
        select: 'title'
    });

    next();
});

module.exports = mongoose.model('Service', serviceSchema);