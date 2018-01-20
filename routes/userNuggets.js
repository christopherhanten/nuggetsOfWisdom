var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/userNuggets', function(req, res, next) {
  res.render('userNuggets', { title: 'User Nuggets' });
});

module.exports = router;
