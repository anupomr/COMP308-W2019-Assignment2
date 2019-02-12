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
            console.log(customerList);
            res.render('customers/index', {
                title: 'Customers List',
                customerList: customerList
            });
        }
    });
});




module.exports = router;