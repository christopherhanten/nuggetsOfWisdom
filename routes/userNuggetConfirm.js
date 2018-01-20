var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/userNuggetsConfirm', function(req, res, next) {
  res.render('userNuggetsConfirm', { title: 'nuggetConfirmation' });
});

module.exports = router;
