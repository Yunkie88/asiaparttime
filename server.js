var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongo = require ('./jobs.js');

app.use('/',mongo);

app.listen (8080);

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin123@ds123534.mlab.com:23534/all_jobs')

module.exports = app; 