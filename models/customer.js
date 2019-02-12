let mongoose=require('mongoose');
//Create model  class
let customerSchema=mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    favorateSports: String,
    noOfLanguage: Number,
    feedback: String    
},
{
    collection: "customers"
});

module.exports=mongoose.model('customer', customerSchema);