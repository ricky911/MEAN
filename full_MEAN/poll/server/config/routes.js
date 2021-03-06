var User = require('../controllers/users.js')
var Question = require('../controllers/questions.js')

module.exports = function(app){
	//user routes
	app.get('/users', User.index)
	app.post('/users', User.create)
	app.get('/users/:id', User.show)
	app.post('/login', User.login)
	//question routes
	app.get('/questions', Question.index)
	app.post('/questions', Question.create)
	app.get('/questions/:id', Question.show)
	app.delete('/questions/:id', Question.destroy)
	app.put('/questions/:id/votes/option1', Question.updateOptionOne)
	app.put('/questions/:id/votes/option2', Question.updateOptionTwo)
	app.put('/questions/:id/votes/option3', Question.updateOptionThree)
	app.put('/questions/:id/votes/option4', Question.updateOptionFour)
}