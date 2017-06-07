var User = require('../controllers/users.js')
var Answer = require('../controllers/answers.js')
var Question = require('../controllers/questions.js')

module.exports = function(app){
	//user routes
	app.get('/users', User.index)
	app.post('/users', User.create)
	app.get('/users/:id', User.show)
	app.post('/login', User.login)
	//answer routes
	app.get('/answers', Answer.index)
	app.post('/answers', Answer.create)
	app.post('/answers/:id/like', Answer.addLikes)
	//question routes
	app.get('/questions', Question.index)
	app.post('/questions', Question.create)
	app.get('/questions/:id', Question.show)
}
