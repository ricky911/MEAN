var User = require('../controllers/users.js');
var Blist = require('../controllers/bucketlists.js')

module.exports = function(app){
	console.log('reached routes')
	//user routes
	app.get('/users', User.index);
	app.post('/users', User.create);
	app.get('/users/:id', User.show);
	// app.post('/login', User.login);
	//bucketlist routes
	app.get('/bucketlist', Blist.index);
	app.post('/bucketlist', Blist.create);
	app.post('/bucketlist/:id', Blist.updateCheck);
}