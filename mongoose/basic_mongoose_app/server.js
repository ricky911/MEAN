var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose')

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.render('index');
})

mongoose.Promise = global.Promise; 

app.post('/users', function(request, response){
	console.log(request.body)
	var user = new User({
		name: request.body.name,
		age: request.body.age
	})
	user.save(function(err){
		if(err){
			console.log('something went wrong');
		} else {
			console.log('successfull added a user!')
			response.redirect('/')
		}
	})
})

mongoose.connect('mongod://localhost/basic_mongoose')

var UserSchema = new mongoose.Schema({
	name: String,
	age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User') 

app.listen(8000, function(){
	console.log('listening on 8000...')
})