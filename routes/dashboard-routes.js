const router = require('express').Router();
const sequelize = require('../config/connection');
const { UserMessages, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/',  (req, res) => {
   UserMessages.findAll({
    order: [['created_at', 'DESC']],
    attributes: [
        'id',
        'messages',
        'user_id',
        'created_at'
    ]
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;