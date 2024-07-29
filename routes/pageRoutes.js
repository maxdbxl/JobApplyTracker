const { Router } = require('express');
const router = Router();
const pageController = require('../controllers/pageController');

router.get('/profile', pageController.profile_get);
router.get('/dashboard', pageController.dashboard_get);
router.post('/dashboard', pageController.dashboard_post);
router.get('/job/:id', pageController.job_get);
router.put('/job/:id', pageController.job_put);
router.get('/createjob', pageController.createjob_get);
router.post('/createjob', pageController.createjob_post);

module.exports = router;