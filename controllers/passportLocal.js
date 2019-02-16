const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const customer = require("../models/customer");
passport.use( new LocalStrategy(
    {passReqToCallback:true},
    function(req, username, password, done){

        user.findbyname(username, function (err, userobj) {
            if (err) {
                console.log(err.message);
                req.flash("error_msg", err.message);
                return done(null, false);
            }
            if (!userobj) {
                console.log("user not found");
                req.flash("error_msg", 'User not found.');
                return done(null, false);
            }
            //user found, now check password match
            userobj.checkPassword(password, function (err, isMatch) {
                if (err) {
                    console.log(err.message);
                    req.flash("error_msg", err.message);
                    return done(null, false);
                }
                if (isMatch) {
                    return done(null, userobj);
                } else {
                    req.flash("error_msg", 'Customer not found.');
                    return done(null, false);
                }
            });
        });
    }));
    
   
passport.serializeUser(function (userobj, done) {
    done(null, userobj.id);
});

passport.deserializeUser(function (id, done) {
    user.findById(id, function (err, userobj) {
        done(err, userobj);
    });
}); 