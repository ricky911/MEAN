var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	question: {
		required: [true, 'Question field cannot be blank'],
		type: String,
		minlength: [10, 'Question must be at least 10 characters']
	},
	description: {
		type: String
	},
	answers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Answer'
	}],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
}, {timestamps: true})

mongoose.model('Question', QuestionSchema)