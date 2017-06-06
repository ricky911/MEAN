var mongoose = require('mongoose');

var User = mongoose.model('User')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')

module.exports = {
	index: function(req, res){
		Answer.find({})
		.populate('user')
		.populate('question')
		.exec(function(err, answers){
			if(err){
				return res.json(err)
			}
			return res.json(answers)
		});
	},
	create: function(req, res){
		Answer.create(req.body, function(err, answer){
			if(err){
				return res.json(err)
			}
			Question.findByIdAndUpdate(req.body.question, {$push:{answers:answer._id}}, function(err, question){
				if(err){
					return res.json(err)
				}
				User.findByIdAndUpdate(req.body.user, {$push:{answers:answer._id}}, function(err, question){
					if(err){
						return res.json(err)
					}
					return res.json(answer)
				})
			})
		});
	},
	addLikes: function(req, res){
		Answer.findByIdAndUpdate(req.body.id, {$inc:{likes: 1}}, function(err, answer){
			if(err){
				return res.json(err)
			}
			return res.json(answer)
		})
	}
}