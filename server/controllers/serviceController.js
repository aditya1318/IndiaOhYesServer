// Importing modules
const
    Service = require('../models/serviceModel'),
    handlerFactory = require('./handlerFactory');

// Controllers
exports.createService = handlerFactory.createOne(Service);
exports.getAllServices = handlerFactory.getAll(Service, { path: 'category', select: 'title -_id' });
exports.getService = handlerFactory.getOne(Service, { path: 'category' });
exports.updateService = handlerFactory.updateOne(Service);
exports.deleteService = handlerFactory.deleteOne(Service);
exports.getServiceByCategoryId = handlerFactory.getAll(Service, { path: 'Service', select: 'category' });
