// console.log('future mongoose')
var mongoose = require('mongoose');
// requires mongoose
var fs = require('fs');
//loads model files

mongoose.connect('mongodb://localhost/friends');
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