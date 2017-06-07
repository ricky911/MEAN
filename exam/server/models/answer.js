var mongoose = require('mongoose')

var AnswerSchema = new mongoose.Schema({
	answer: {
		type: String,
		required: [true, 'Answer cannot be blank'],
		minlength: [10, 'Answer cannot be less than 10 characters']
	},
	details: {
		type: String
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	likes: {
		type: Number,
		default: 0
	},
	question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Question'
	}
}, {timestamps: true})

mongoose.model('Answer', AnswerSchema)