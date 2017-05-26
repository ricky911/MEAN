var express = require('express');
var mongoose = require('mongoose');
var bp = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bp.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
//update promise library
mongoose.Promise = global.Promise
//require the mongoose config file
require('./server/config/mongoose.js');
//store routes in a function
var routes_setter = require('./server/config/routes.js');
//invoke routes function. pass app var
routes_setter(app);