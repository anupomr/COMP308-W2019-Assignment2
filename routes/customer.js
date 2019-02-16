let express = require('express');
let router = express.Router();

let customerController=require('../controllers/customer');
//Read All Data
router.get('/',customerController.displayCustomerList); 

/** Get router for add page */
router.get('/add', customerController.diplayAddPage);

/* POST route for processing add page */
router.post('/add', customerController.processAddPage);
/* POST route for processing Signup page */
router.post('/signup', customerController.signupPageProcess);

/* GET route for processing edit page */
router.get('/edit/:id', customerController.displayEditPage);
/* POST route for processing Edit page */
router.post('/edit/:id', customerController.processEditPage);

/* GET request for processing delete action*/
router.get('/delete/:id', customerController.deleteAction);
/* GET route for processing feedback page */
router.get('/feedback', customerController.displayFeedbackPage);
module.exports = router;