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

//connect to database
mongoose.connect('mongodb://localhost/quoting');

//update promise library
mongoose.Promise = global.Promise;

//make user table(collection)
var QuoteSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String,
		maxlength: 100,
		minlength: [1, 'Please enter valid name']
	},
	quote: {
		required: true,
		type: String
	}
}, {timestamps: true})

//register schema to db
mongoose.model('Quote', QuoteSchema)
//extracts the model from the db
var Quote = mongoose.model('Quote')

app.get('/', function(req, res){
	res.render('index');
})

//saving object to db
app.post('/addQuote', function(req, res){
	// console.log(req.body);
	var quote = new Quote(req.body);
	console.log(quote)
	quote.save(function(err, quote){
		if(err){
			res.send(err);
		} else {
			res.redirect('/quotes');
		}
	})
})

//get users from db
app.get('/quotes', function(req, res){
	Quote.find({}).sort({createdAt: "desc"}).exec(function(err, quotes){
		if(err){
			res.send(err);
		} else {
			res.render('quotes', {quotes: quotes});
		}
	})
})

app.listen(8000, function(){
	console.log('listening on 8000...')
})