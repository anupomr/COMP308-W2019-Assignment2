let express = require('express');
let router = express.Router();

//Create a reference to the db schema
let customerModel = require('../models/customer');


module.exports.diplayHomePage=(req, res, next) => {
 
    res.render('index', { title: 'Home'});
  }

  module.exports.displayAboutPage=(req, res, next) => {
    res.render('index', { title: 'About' });
  }
module.exports.logout=(req, res, next) => {
    res.render('index', { title: 'Home' });
  }
  module.exports.displayCustomerPage=(req, res, next) => {
    res.render('index', { title: 'Customer' });
  }
  module.exports.displaySignupPage=(req, res, next) => {
    res.render('signup', { title: 'Signup' });
  }
  module.exports.displayLoginPage=(req, res, next) => {
  
    res.render('login', { title: 'Login' });
  }
  module.exports.displayFeedbackPage=(req, res, next) => {
    res.render('index', { title: 'FeedBack', body:'please Login' });
  }
  module.exports.processFeedbackPage=(req, res, next) => {
    req.session.email=req.body.userName;
    let emailId=req.body.userName;
    // customerModel.findById(emailId,(err,customerObject)=>{
    //   if(err){
    //     console.log(err);
    //     res.end(err);
    // }
    // else{
    //     console.log(customerObject);
    //     res.render('feedback',{
    //         title:'FeedBack',
    //         customer: customerObject
    //     });
    // }
    // });
 
   res.render('feedback', { title: 'FeedBack', Email:req.session.email});
  }
  module.exports.processThankyouPage=(req, res, next) => {
    req.session.fName=req.body.fname;
     req.session.lName=req.body.lname;
    //req.session.email=req.body.txtEmail;
    res.render('thankyou', {title: 'Thank You', firstName:req.session.fName, lastName:req.session.lName});
  }

  