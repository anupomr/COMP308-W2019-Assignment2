let express = require('express');
let router = express.Router();


//Create a reference to the db schema
let customerModel = require('../models/customer');

module.exports.displayCustomerList=(req, res, next) => {
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
}

module.exports.diplayAddPage=(req, res, next) => {
    res.render('customers/add', {
        title: 'Add new Customer'
    });
}

module.exports.processAddPage=(req, res, next) => {
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
}


module.exports.signupPageProcess=(req, res, next) => {
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
}
module.exports.displayEditPage=(req, res, next) => {
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
}

module.exports.processEditPage=(req, res, next) => {
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
}
module.exports.deleteAction=(req, res, next) => {
    let id=req.params.id;
    customerModel.remove({_id:id},(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/customer-list');
        }
    });     
}

module.exports.displayFeedbackPage=(req, res, next) => {
    let id=req.params.id;
    
    customerModel.findById(id, (err, customerObject) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('/feedback',{
                title:'Edit Profile',
                customer: customerObject
            });
        }
    });   
}