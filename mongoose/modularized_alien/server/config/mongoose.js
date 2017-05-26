//require mongoose
var mongoose = require('mongoose');
//require fs module that loads model files
var fs = require('fs');
//connect to db
mongoose.connect('mongodb://localhost/modularized_alien');
//var that points to where models are
var models_path = __dirname + './../models'
//read all js files in the models_path
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0 ){
		//runs the model file which registers the schema
		require(models_path + '/' + file);
	}
});