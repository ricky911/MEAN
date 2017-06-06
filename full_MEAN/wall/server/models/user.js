var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	name: {
		required: [true, 'Must enter name'],
		type: String,
		minlength: [2, 'Name must be at least 2 characters'],
		trim: true
	},
	email: {
		required: [true, 'Must enter email'],
		type: String,
		trim: true,
		// validate: {
		// 	validator: function(v){
		// 		return /\S*\@\S*\.\S+/g.test(v);
		// 	},
		// 	message: 'Email must be valid.'
		// },
		unique: [true, 'Email already registered.']
	},
	password: {
		required: [true, 'Must enter password'],
		type: String,
		trim: true
	},
	birthday: {
		required: [true, 'Must enter birthday'],
		type: String,
		trim: true
	}

})

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

mongoose.model('Users', UserSchema);