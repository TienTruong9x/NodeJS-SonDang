var express = require('express');
var router = express.Router();


router.post('/search', function(req, res, next) {
  console.log(req.body);
  res.render('search', { title: 'Search',sub:req.body.sub,email:req.body.email });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Search',q:req.query.q });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
