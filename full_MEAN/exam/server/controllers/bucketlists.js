var mongoose = require('mongoose')

var BList = mongoose.model('BList')
var User = mongoose.model('User')

module.exports = {
	create: function(req, res){
		BList.create(req.body, function(err, bList){
			if(err){
				return res.json(err)
			}
			User.findByIdAndUpdate(req.body.user, {$push : {bucketlist: bList._id}}, function(err, user){
				if(err){
					return res.json(err)
				}
				User.findOneAndUpdate({'name': req.body.tag}, {$push: {bucketlist: bList._id}}, function(err, user){
					if(err){
						return res.json(err)
					}
					return res.json(bList)
				})
			})
		})
	},
	index:  function(req, res){
		BList.find({})
		.populate({path:'user', model:'User'})
		.exec(function(err, bLists){
			if(err){
				return res.json(err)
			}
			return res.json(bLists)
		})
	},
	updateCheck: function(req, res){
		// console.log(req.body)
		BList.findById(req.params.id, function(err, item){
			if(err){
				return res.json(err);
			}
			item.check = !item.check;
			item.save(function(err, item){
				if(err){
					return res.json(err);
				}
				return res.json(item);
			})
		})
	}
}