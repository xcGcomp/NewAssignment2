var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/services', function(req, res, next) {
  res.render('services');
});

router.get('/projects', function(req, res, next) {
  res.render('projects');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


router.get('/aboutme', function(req, res, next) {
  res.render('aboutme');
});

router.get('/resume', function(req, res, next) {
 res.download('public/pdf/Resume.pdf');
});

module.exports = router;
