var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports = {
	index: function(req, res){
		Users.find({}).exec(function(err, users){
			if(err){
				return res.json(err);
			}
			return res.json(users)
		});
	},
	create: function(req, res){
		Users.create(req.body, function(err, user){
			if(err){
				return res.json(err);
			}
			return res.json(user)
		});
	}
};