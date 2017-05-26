//require mongoose
var mongoose = require('mongoose');
//create Schema
var AlienSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String,		
	},
	eyes: {
		required: true,
		type: Number,
	},
	antennas: {
		required: true,
		type: Number,
	}
}, {timestamps: true})
//register schema as a model
var Alien = mongoose.model('Alien', AlienSchema);