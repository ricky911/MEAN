var mongoose = require('mongoose');

var User = mongoose.model('User')

module.exports = {
	index: function(req, res){
		User.find({}, function(err, users){
			if(err){
				return res.json(err)
			}
			return res.json(users)
		});
	},
	create: function(req, res){
		User.create(req.body, function(err, user){
			if(err){
				return res.json(err)
			}
			return res.json(user)
		});
	},
	show: function(req, res){
		User.findById(req.params.id)
		.populate({path: 'bucketlist', model: 'Blist', populate:{path: 'user', model: 'User'}} )
		.exec(function(err, user){
			if(err){
				return res.json(err)
			}
			if(!user){
				return res.json({'error': 'User not found'})
			}
			return res.json(user)
		});
	},
	// login: function(req, res){
	// 	User.findOne({name:req.body.name}, function(err, user){
	// 		if(err){
	// 			return res.json(err)
	// 		}
	// 		return res.json(user)
	// 	})
	// }
}