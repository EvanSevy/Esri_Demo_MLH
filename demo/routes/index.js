var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ESRI demo'});
});

/* GET 2d map demo */
router.get('/2dmap', function(req, res, next) {
  res.render('2dmap');
});

module.exports = router;
