const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController');

router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.get('/register', authController.register_get);
router.post('/register', authController.register_post);
router.get('/pwdupdate', authController.pwdupdate_get);
router.post('/pwdupdate', authController.pwdupdate_post);

module.exports = router;