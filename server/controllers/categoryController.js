// Importing modules
const
    Category = require('../models/categoryModel'),
    handlerFactory = require('./handlerFactory');

// Controllers
exports.createCategory = handlerFactory.createOne(Category);
exports.getAllCategories = handlerFactory.getAll(Category);
exports.getCategory = handlerFactory.getOne(Category);
exports.updateCategory = handlerFactory.updateOne(Category);
exports.deleteCategory = handlerFactory.deleteOne(Category);