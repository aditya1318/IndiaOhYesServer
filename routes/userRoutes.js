// UNCOMMENT CRUCIAL STATEMENTS

const
    router = require('express').Router(),
    userController = require('../controllers/userController'),
    authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/verify-login', authController.verifyLogin);

// Protected routes (only for logged in users)
router.use(authController.protect);

router
    .route('/me')
    .get(userController.getMe, userController.getUser)
    .patch(userController.getMe, userController.updateMe, userController.updateUser);

// Restricted routes (only for admin)
// router.use(authController.restrictTo('admin'));

router.get('/', userController.getAllUsers);
router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;