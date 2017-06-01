var mongoose = require('mongoose'); 

var FriendSchema = new mongoose.Schema({
	first_name: {
		required: [true, 'First name cannot be blank'],
		type: String,
		minlength: [2, 'Name must be at least 2 characters']
	},
	last_name: {
		required: [true, 'Last name cannot be blank'],
		type: String,
		minlength: [2, 'Name must be at least 2 characters']
	},
	birthday: {
		required: [true, 'Birthday cannot be blank'],
		type: Date,
	}
}, {timestamps: true})

mongoose.model('Friend', FriendSchema);