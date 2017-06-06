app.factory('UserFactory', function($http){
	var users = [];
	var factory = {};

	factory.index = function(callback){
		$http.get('/users').then(callback);
	}
	factory.create = function(newUser, callback){
		$http.post('/users', newUser).then(callback)
	}

	return factory;
})