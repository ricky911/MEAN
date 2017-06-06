var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	question: {
		required: [true, 'Question cannot be blank'],
		type: String,
		minlength: [8, 'Question must be at least 8 characters']
	},
	optionOne: {
		required: [true, 'Option One cannot be blank'],
		type: Number,
		minlength: [3, 'Options must be at least 3 characters']
	},
	optionTwo: {
		required: [true, 'Option Two cannot be blank'],
		type: Number,
		minlength: [3, 'Options must be at least 3 characters']
	},
	optionThree: {
		required: [true, 'Option Three cannot be blank'],
		type: Number,
		minlength: [3, 'Options must be at least 3 characters']
	},
	optionFour: {
		required: [true, 'Option Four cannot be blank'],
		type: Number,
		minlength: [3, 'Options must be at least 3 characters']
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, {timestamps:true})

mongoose.model('Question', QuestionSchema)