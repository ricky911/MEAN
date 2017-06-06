var express = require('express');
var bp = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bp.json());

require('./server/config/mongoose.js')

app.listen(8000, function(){
	console.log('listening on 8000...')
})