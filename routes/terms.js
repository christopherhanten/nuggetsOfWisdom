var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/terms', function(req, res, next) {
  res.render('terms', { title: 'Terms' });
});

module.exports = router;
