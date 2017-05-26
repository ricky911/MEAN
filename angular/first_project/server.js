var express = require('express');
var bp = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bp.json());

// app.set('views')

app.get('/', function(req, res){
	res.render('index.html');
})
app.listen(8000, function(){
	console.log('listening on 8000...')
})