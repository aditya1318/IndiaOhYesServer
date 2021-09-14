// Importing modules
const
    Package = require('../models/packageModel'),
    handlerFactory = require('./handlerFactory');

// Controllers
exports.createPackage = handlerFactory.createOne(Package);
exports.getAllPackages = handlerFactory.getAll(Package);
exports.getPackage = handlerFactory.getOne(Package);
exports.updatePackage = handlerFactory.updateOne(Package);
exports.deletePackage = handlerFactory.deleteOne(Package);
