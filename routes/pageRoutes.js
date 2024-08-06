const { Router } = require('express');
const router = Router();
const pageController = require('../controllers/pageController');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

router.get('/profile', requireAuth, pageController.profile_get);
router.get('/dashboard', requireAuth, pageController.dashboard_get);
router.post('/dashboard', pageController.dashboard_post);
router.get('/job/:id', requireAuth, pageController.job_get);
router.put('/job/:id', pageController.job_put);
router.get('/createjob', requireAuth, pageController.createjob_get);
router.post('/createjob', pageController.createjob_post);

module.exports = router;