var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	question: {
		required: [true, 'Question cannot be blank'],
		type: String,
		minlength: [8, 'Question must be at least 8 characters']
	},
	optionOne: {
		content: {
			type: String,
			required: [true, 'Content cannot be blank'],
			minlength: [3, 'Content must be at least 3 characters']
		},
		votes: {
			count: {
				type: Number,
				default: 0
			}
		}
	},
	optionTwo: {
		content: {
			type: String,
			required: [true, 'Content cannot be blank'],
			minlength: [3, 'Content must be at least 3 characters']
		},
		votes: {
			count: {
				type: Number,
				default: 0
			}
		}
	},
	optionThree: {
		content: {
			type: String,
			required: [true, 'Content cannot be blank'],
			minlength: [3, 'Content must be at least 3 characters']
		},
		votes: {
			count: {
				type: Number,
				default: 0
			}
		}
	},
	optionFour: {
		content: {
			type: String,
			required: [true, 'Content cannot be blank'],
			minlength: [3, 'Content must be at least 3 characters']
		},
		votes: {
			count: {
				type: Number,
				default: 0
			}
		}
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, {timestamps:true})

mongoose.model('Question', QuestionSchema)