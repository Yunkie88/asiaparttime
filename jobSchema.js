var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var JobSchema = new Schema({
Job_Title: String,
Job_Type: String,
Job_Category: String,
Job_Duration: String,
Date_Start: Date,
Working_Hour:String,
State:String,
Location:String,
Zipcode: Number,
Job_Description: String,
Apply: String,
createdAt : {type: Date, default: Date.now}
});


module.exports = mongoose.model('Job', JobSchema);