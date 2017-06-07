var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		required: [true, 'Name field cannot be blank'],
		type: String,
		unique: true
	},
	bucketlist: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'BList'
	}]
}, {timestamps: true})

mongoose.model('User', UserSchema);