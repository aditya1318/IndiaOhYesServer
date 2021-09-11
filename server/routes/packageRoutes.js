const
    router = require('express').Router(),
    packageController = require('../controllers/packageController');

router
    .route('/')
    .get(packageController.getAllPackages)
    .post(packageController.createPackage);

router
    .route('/:id')
    .get(packageController.getPackage)
    .patch(packageController.updatePackage)
    .delete(packageController.deletePackage);

    router
    .route('/getPackages/:id')
    .get(packageController.getAllPackages);

module.exports = router;