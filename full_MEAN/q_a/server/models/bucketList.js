var mongoose = require('mongoose');
var User = mongoose.model('User');

var BListSchema = new mongoose.Schema ({
	title: {
		type: String,
		required: [true, 'Title cannot be blank'],
		minlength: [5, 'Title must be at least 5 characters']
	},
	description: {
		type: String,
		required: [true, 'Description cannot be blank'],
		minlength: [10, 'Description must be at least 10 characters']
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	check: {
		type: Boolean,
		default: false
	}
}, {timestamps:true})

mongoose.model('BList', BListSchema)