const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const quizRoutes = require('./quiz-routes.js');

router.use('/api', apiRoutes);
router.use('/quiz', quizRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

router.get('/login', (req, res) => {
  res.render('login');
});

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;