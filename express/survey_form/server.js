var express = require('express');
var bp = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.render('index');
})

app.post('/result', function(request, response){
	console.log(request.body);
	var users_array = [
		request.body
	];
	response.render('result', {users: users_array})
})

app.listen(8000, function(){
	console.log('listening on 8000...')
})