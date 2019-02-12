let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
//Create a reference to the db schema
let customerModel = require('../models/customer');

//Read
router.get('/', (req, res, next) => {
    customerModel.find((err, customerList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(customerList);
            res.render('customers/index', {
                title: 'Customers List',
                customerList: customerList
            });
        }
    });
});
/** Get router for add page */
router.get('/add', (req, res, next) => {
    res.render('customers/add', {
        title: 'Add new Customer'
    });
});

/* POST route for processing add page */
router.post('/add', (req, res, next) => {
    // console.log(req.body);
    let newCustomer = customerModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "userName": req.body.userName,
        "password":req.body.password,
        "favorateSports":req.body.favorateSports,
        "noOfLanguage":req.body.noOfLanguage,
        "feedback":req.body.feedback
    });
    customerModel.create(newCustomer, (err, customerModel) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/customer-list')
        }
    });   
});
/* POST route for processing Signup page */
router.post('/signup', (req, res, next) => {
    // console.log(req.body);
    let newCustomer = customerModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "userName": req.body.userName,
        "password":req.body.password,
        "favorateSports":req.body.favorateSports,
        "noOfLanguage":req.body.noOfLanguage
        
    });
    customerModel.create(newCustomer, (err, customerModel) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/login')
        }
    });   
});

/* GET route for processing edit page */
router.get('/edit/:id', (req, res, next) => {
    let id=req.params.id;
    
    customerModel.findById(id, (err, customerObject) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('customers/edit',{
                title:'Edit Profile',
                customer: customerObject
            });
        }
    });   
});
/* POST route for processing Edit page */
router.post('/edit/:id', (req, res, next) => {
    let id=req.params.id;
    let updatedCustomer = customerModel({
        "_id":id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "userName": req.body.userName,        
        "favorateSports":req.body.favorateSports,
        "noOfLanguage":req.body.noOfLanguage,
        "feedback":req.body.feedback
    });
    customerModel.update({_id:id},updatedCustomer,(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/customer-list');
        }
    });
    
});
module.exports = router;