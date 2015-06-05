var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: '请访问/todos' });
});

module.exports = router;