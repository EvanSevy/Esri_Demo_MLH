var express = require('express');
var router = express.Router();


router.get('/2dMapPage', function(req, res, next) {
  res.redirect('/html/2dMapPage.html');
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/html/index.html');
});


module.exports = router;
