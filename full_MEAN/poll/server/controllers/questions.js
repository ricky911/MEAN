var mongoose = require('mongoose');
var User = mongoose.model('User')
var Question = mongoose.model('Question')

module.exports = {
	index: function(req, res){
		Question.find({})
		.populate({path:'user', model:'User'})
		.exec(function(err, questions){
			if(err){
				return res.json(err)
			}
			return res.json(questions)
		})
	},
	create: function(req, res){
		Question.create(req.body, function(err, question){
			if(err){
				return res.json(err)
			}
			User.findByIdAndUpdate(req.body.user, {$push:{questions:question._id}}, function(err, user){
				if(err){
					return res.json(err)
				}
				return res.json(question)
			})
		})
	},
	show: function(req, res){
		Question.findById(req.params.id, function(err, question){
			if(err){
				return res.json(err)
			}
			if(!question){
				return res.json({'error': 'Question does not exist'})
			}
			return res.json(question)
		})
	},
	destroy: function(req, res){
		Question.findById(req.params.id, function(err, question){
			if(err){
				return res.json(err)
			}
			question.remove(function(err, question){
				if(err){
					return res.json(err)
				}
				return res.json(question)
			})
		})
	},
	updateOptionOne: function(req, res){
		Question.findByIdAndUpdate(req.params.id, {$inc: {'votes.count': 1}}, {new: true}, function(err, question){
			if(err){
				return res.json(err)
			}
			return res.json(question)
		})
	},
	updateOptionTwo: function(req, res){
		Question.findByIdAndUpdate(req.params.id, {$inc: {'votes.count': 1}}, {new: true}, function(err, question){
			if(err){
				return res.json(err)
			}
			return res.json(question)
		})
	},
	updateOptionThree: function(req, res){
		Question.findByIdAndUpdate(req.params.id, {$inc: {'votes.count': 1}}, {new: true}, function(err, question){
			if(err){
				return res.json(err)
			}
			return res.json(question)
		})
	},
	updateOptionFour: function(req, res){
		Question.findByIdAndUpdate(req.params.id, {$inc: {'votes.count': 1}}, {new: true}, function(err, question){
			if(err){
				return res.json(err)
			}
			return res.json(question)
		})
	},
}