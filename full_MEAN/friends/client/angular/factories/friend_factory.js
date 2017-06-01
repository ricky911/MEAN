app.factory('FriendFactory', function($http){
	var factory = {};
	var friends = [];

	factory.index = function(callback){
		$http.get('/friends').then(callback);
	};
	factory.create = function(newFriend, callback){
		$http.post('/friends', newFriend).then(callback)
	};
	factory.show = function(id, callback){
		console.log(id)
		$http.get('/friends/' + id).then(callback)
	};
	factory.update = function(id, friend, callback){
		// console.log(friend, id)
		$http.put('/friends/' + id, friend).then(callback)
	};
	factory.destroy = function(id, callback){
		// console.log(id)
		$http.delete('/friends/' + id).then(callback)
	}

	return factory;
})