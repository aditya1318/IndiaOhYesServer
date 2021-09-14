const
    router = require('express').Router(),
    serviceController = require('../controllers/ServiceController');

router
    .route('/')
    .get(serviceController.getAllServices)
    .post(serviceController.createService);

router
    .route('/:id')
    .get(serviceController.getService)
    .patch(serviceController.updateService)
    .delete(serviceController.deleteService);

module.exports = router;