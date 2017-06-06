var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
	answer: {
		required: [true, 'Answer field cannot be blank'],
		type: String,
		minlength: [5, 'Answer must be at least 5 characters']
	},
	details: {
		type: String
	},
	likes: {
		default: 0,
		type: Number
	},
	question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Question'
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
}, {timestamps:true})

mongoose.model('Answer', AnswerSchema)