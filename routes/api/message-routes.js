const router = require('express').Router();
const { UserMessages } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// Get all messages
router.get('/', (req,res) => {
    UserMessages.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'id',
            'messages',
            'user_id',
            'created_at'
        ]
    })
    .then(dbMessageData => res.json(dbMessageData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post new message
router.post('/', withAuth, (req,res) => {
    UserMessages.create({
        messages: req.body.post_message,
        user_id: req.session.user_id
        
    })
    .then(dbMessageData => res.json(dbMessageData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;