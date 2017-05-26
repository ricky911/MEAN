//require mongoose
var mongoose = require('mongoose');
var Alien = mongoose.model('Alien');
//export modules
module.exports = {
	index: function(req, res){
		Alien.find({}, function(err, alien){
			if(err){
				return res.send(err)
			}
			res.render('index', {alien: alien})
		})
	}
	
}