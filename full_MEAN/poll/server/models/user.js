var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Question = mongoose.model('Question')

var UserSchema = new mongoose.Schema({
	name: {
		required: [true, 'Name cannot be blank'],
		type: String
	},
	password: {
		required: [true, 'Password cannot be blank'],
		type: String
	},
	questions: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Question'
	}]
}, {timestamps: true})

UserSchema.methods.hashPassword = function(password){
	this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

UserSchema.methods.authenticate = function(password){
	return bcrypt.compareSync(password, this.password);
}

UserSchema.pre('save', function(callback){
	this.hashPassword(this.password);
	callback();
});

UserSchema.pre('remove', function(callback){
	var self = this
	Question.remove({user: self._id}, callback)
})

mongoose.model('User', UserSchema);

