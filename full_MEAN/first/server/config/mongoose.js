console.log('future mongoose')
var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/first');
mongoose.Promise = global.Promise;

var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') != -1){
		require(models_path + '/' + file);
	}
})