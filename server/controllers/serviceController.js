// Importing modules
const
    Service = require('../models/serviceModel'),
    handlerFactory = require('./handlerFactory');

// Controllers
exports.createService = handlerFactory.createOne(Service);
exports.getAllServices = handlerFactory.getAll(Service);
exports.getService = handlerFactory.getOne(Service);
exports.updateService = handlerFactory.updateOne(Service);
exports.deleteService = handlerFactory.deleteOne(Service);