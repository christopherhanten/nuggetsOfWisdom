var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signUpConfirm', function(req, res, next) {
  res.render('signUpConfirm', { title: 'Confirmation' });
});

module.exports = router;
