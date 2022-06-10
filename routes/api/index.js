const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const messageRoutes = require('./message-routes');

router.use('/users', userRoutes);
router.use('/messages', messageRoutes);

module.exports = router;