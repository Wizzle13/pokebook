const router = require('express').Router();

router.get('/',  (req, res) => {
    res.render('dashboard', {
        // loggedIn: req.session.loggedIn //Needed to regester loggedIn status on other pages
    });
})

module.exports = router;