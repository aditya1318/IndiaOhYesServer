const
    User = require('../models/userModel'),
    factory = require('./handlerFactory'),
    AppError = require('../utils/appError');

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.getMe = (req, res, next) => {
    req.params.id = req.user.id;
    next();
};

exports.updateMe = (req, res, next) => {
    // Removed non-updateable fields
    if (req.body.role || req.body.phone)
        return next(new AppError('Cannot update role or phone number through this route'));

    next();
};