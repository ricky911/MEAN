var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bp.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//connect to db
mongoose.connect('mongodb://localhost/mongoose_dashboard');
//update promise library
mongoose.Promise = global.Promise

//schemas
var AlienSchema = new mongoose.Schema({
	eyes: {
		required: true,
		type: Number,
		min: 0,
		max: 8
	},
	arms: {
		required: true,
		type: Number,
		min: 0,
		max: 8,
	},
	legs: {
		required: true,
		type: Number,
		min: 0,
		max: 8,
	},
	antennas: {
		required: true,
		type: Number,
		min: 0,
		max: 8,
	},
	name: {
		required: true,
		type: String,
	}
}, {timestamps: true})
//register schema to db
mongoose.model('Alien', AlienSchema)
//extracts model from db
var Alien = mongoose.model('Alien')
//opens home page/lists aliens
app.get('/', function(req, res){
	Alien.find({}).exec(function(err, aliens){
		if(err){
			console.log(err);
			res.send(err);
		} else {
			res.render('index', {aliens: aliens});
		}
	})
})
//create page
app.get('/alien/new', function(req, res){
	res.render('create');
})
//saving created alien to db
app.post('/alien', function(req, res){
	console.log(req.body)
	var alien = new Alien(req.body)
	alien.save(function(err, alien){
		if(err){
			res.send(err);
			console.log(err);
		} else {
			res.redirect('/')
		}
	})
})
//show clicked alien
app.get('/alien/:id', function(req, res){
	Alien.findById(req.params.id).exec(function(err, alien){
		if(err){
			return res.send(err)
		} if(!alien){
			res.send('${alien} not found')
		} else {
			res.render('alien', {alien: alien})
		}
	})
})
//update alien
app.get('/alien/edit/:id', function(req, res){
	Alien.findById(req.params.id).exec(function(err, alien){
		if(err){
			res.send(err);
		} if(!alien){
			res.send('alien not found');
		} else {
			res.render('edit', {alien: alien})
		}
	})
})
//save updates
app.post('/alien/:id', function(req,res){
	Alien.findById(req.params.id).exec(function(err, alien){
		if(err){
			return res.send(err);
		} if(!alien) {
			return res.send('no alien');
		} else {
			alien.name = req.body.name;
			alien.eyes = req.body.eyes;
			alien.legs = req.body.legs;
			alien.arms = req.body.arms;
			alien.antennas = req.body.antennas;
			alien.save(function(err, alien){
				if(err){
					res.send(err);
				} else {
					res.redirect('/alien/' + alien._id);
				}
			})
		}
	})
})
//delete object from db
app.post('/alien/delete/:id', function(req, res){
	Alien.findByIdAndRemove(req.params.id, function(err, alien){
		if(err){
			res.send(err)
		} else {
			res.redirect('/')
		}
	})
})
//port 8000
app.listen(8000, function(){
	console.log('listening on 8000...');
})