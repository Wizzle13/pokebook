const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


router.get('/profile', (req, res) => {
  res.render('profile')
  
})


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('profile');
    return;
  }

  
  res.render('login');
});


module.exports = router;