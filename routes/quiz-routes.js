const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('quiz');
});

module.exports = router;