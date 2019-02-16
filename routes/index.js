let express = require('express');
let router = express.Router();

let indexController=require('../controllers/index');

//const session = require('express-session');
/* GET home page. */
router.get('/', indexController.diplayHomePage);
router.get('/logout', indexController.logout);
router.get('/about', indexController.displayAboutPage);
router.get('/customer', indexController.displayCustomerPage);
router.get('/signup', indexController.displaySignupPage);
router.get('/login', indexController.displayLoginPage);
router.get('/feedback', indexController.displayFeedbackPage);
router.post('/', indexController.processFeedbackPage);
router.post('/thanku', indexController.processThankyouPage);


// /* GET - display login page */
// router.get('/login', indexController.displayLoginPage);

// /* POST - Process Login page */
// router.post('/login', indexController.processLoginPage);

// /* GET - display the registration page */
// router.get('/register', indexController.displayRegistrationPage);

// /* POST - Process the registration page */
// router.post('/register', indexController.processRegistrationPage);

// /* GET - perform the logout request */
// router.get('/logout', indexController.performLogout);
// module.exports = router;
