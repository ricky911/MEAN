var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/exam');
//connect to db

mongoose.Promise = global.Promise;
//update promise library

var models_path = __dirname + '/../models';
//finds models in folder

//reads and requires all js files
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') != -1){
		require(models_path + '/' + file);
	}
})