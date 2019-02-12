let express = require('express');
let router = express.Router();

//const session = require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index', { title: 'Home'});
});
router.get('/logout', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
router.get('/customer', function(req, res, next) {
  res.render('index', { title: 'Customer' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});
router.get('/login', function(req, res, next) {
  
  res.render('login', { title: 'Login' });
});
router.get('/feedback', function(req, res, next) {
  res.render('index', { title: 'FeedBack', body:'please Login' });
});
router.post('/', function(req, res, next) {
  req.session.email=req.body.username;
  console.log()
  res.render('feedback', { title: 'FeedBack', Email:req.session.email});
});
router.post('/thanku', function(req, res, next) {
  req.session.fName=req.body.fname;
   req.session.lName=req.body.lname;
  //req.session.email=req.body.txtEmail;
  res.render('thankyou', {title: 'Thank You', firstName:req.session.fName, lastName:req.session.lName});
});

module.exports = router;
