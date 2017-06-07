var mongoose = require('mongoose')

var QuestionSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	question: {
		type: String,
		required: [true, 'Question cannot be blank'],
		minlength: [10, 'Question must be at least 10 characters'],
	},
	description: {
		type: String,
	},
	answers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Answer',
	}],
}, {timestamps:true})

mongoose.model('Question', QuestionSchema);