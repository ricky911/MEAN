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
mongoose.connect('mongodb://localhost/message_board');
//update promise library
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
//post model
var PostSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String,
	},
	text: {
		required: true,
		type: String
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Comment'
	}]
}, {timestamps: true});
//register to db
mongoose.model('Post', PostSchema);
//extract from db
var Post = mongoose.model('Post');

//comment model
var CommentSchema = new mongoose.Schema({
	_post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	},
	name: {
		required: true,
		type: String
	},
	text: {
		required: true,
		type: String
	}
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);

var Comment = mongoose.model('Comment');
//render home page
app.get('/', function(req, res){
	Post.find({}).populate('comments').exec(function(err, posts){
		if(err){
			res.send(err)
		} else {
			res.render('index', {posts: posts})
		}
	})
})
//save post to db
app.post('/posts', function(req, res){
	// console.log(req.body)
	var post = new Post(req.body);
	post.save(function(err, post){
		if(err){
			res.send(err);
		} else {
			res.redirect('/')
		}
	})
})
//save comment to db
app.post('/comments/:id', function(req, res){
	console.log(req.body)
	Post.findById(req.params.id).exec(function(err, post){
		if(err){
			res.send(err);
		} if(!post){
			res.send('no post');
		} else {
			var comment = new Comment(req.body)
			comment._post = post._id;
			comment.save(function(err, comment){
				if(err){
					return res.send(err);
				}
				post.comments.push(comment._id);
				post.save(function(err, post){
					if(err){
						return res.send(err);
					}
					return res.redirect('/')
				})
			})
		}
	})
})

//port 8000
app.listen(8000, function(){
	console.log('listening on 8000...')
});