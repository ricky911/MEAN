var mongoose = require('mongoose');

var User = mongoose.model('User')
var Question = mongoose.model('Question')
// var Answer = mongoose.model('Answer')

module.exports = {
	index: function(req, res){
		Question.find({})
		.populate({path:'user', model:'User'})
		.populate({path:'answer', model: 'Answer', populate:{path:'user', model:'User'}})
		.exec(function(err, questions){
			if(err){
				return res.json(err)
			}
			return res.json(questions)
		});
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
		});
	},
	show: function(req, res){
		Question.findById(req.body.id)
		.populate({path:'user', model:'User'})
		.populate({path:'answer', model: 'Answer', populate:{path:'user', model:'User'}})
		.exec(function(err, question){
			if(err){
				return res.json(err)
			}
			if(!question){
				return res.json({'error': 'Question not found'})
			}
			return res.json(question)
		})
	}
}