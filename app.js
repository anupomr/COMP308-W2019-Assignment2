let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Database setup
let mongoose=require('mongoose');
let DB = require('./config/db');
//point Mongoose to the DB URI
mongoose.connect(DB.URI);

let mongoDB= mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log("Connected to MongoDB...");
})

var session = require('express-session');

let indexRouter = require('./routes/index');
let customerRouter=require('./routes/customer')


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//initialize the session 
app.use(session({
  //a session is uninitialized when it is new but not modified
  //force a session that is "uninitialized" to be saved to the store
  saveUninitialized: true,
  //forces the session to be saved back to the session store
  //even if the session was never modified during the request
  resave: true,
  secret: 'comp308'
}));
//
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', indexRouter);
app.use('/customer-list', customerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
