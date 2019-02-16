let mongoose=require('mongoose');
let crypto = require('crypto');
//encryption key
const salt = '8nkjfdoi@$f93_039_=90ldkv';  //salt should be created through some other mechanism

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

/*

customerSchema.statics.register = function(user, cbfn){
    user.password = doHash(user.password);
     user.save(cbfn);
}

customerSchema.statics.findbyname = function(name, cbfn){
    customer.findOne({username:name},cbfn);
}

function doHash(val){
    // 10000 - iteration, 64-key length, then convert to base64
    return crypto.pbkdf2Sync(val, salt,10000, 64,'sha512').toString('base64');
}
customerSchema.methods.checkPassword = function(password, cbfn){
    if (this.password === password){
        cbfn(null, true);
    }else{
        cbfn(new Error('user name or password does not match', false));
    }
}*/
module.exports=mongoose.model('customer', customerSchema);