#!/usr/bin/env node

var express = require('express')
  , http = require('http')
  , path = require('path')
  , expressLayouts = require('express-ejs-layouts')
  , passport = require('passport')
  , util = require('util')
  , LocalStrategy = require('passport-local').Strategy
  , mongoose = require('mongoose');
  

// DB CONNECTION
  mongoose.connect('mongodb://localhost/habits');


var app = module.exports = express();

app.configure(function(){
  app.set('port', 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('view options',{layout: 'layout'});
  app.use(express.favicon());
  app.use(expressLayouts);
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());

   // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(express.session({ secret: 'lkhjj;lkjkjlhklg jk jklkj' }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'assets')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// LOAD ROUTES AND CONTROLLERS
require('./routes/routes.js')(app);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});


