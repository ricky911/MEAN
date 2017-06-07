app.factory('UserFactory', function($http, $cookies){
	var factory = {};

	factory.index = function(callback){
		$http.get('/users').then(callback)
	}
	factory.create = function(newUser, callback){
		$http.post('/users', newUser).then(callback);
	}
	factory.show = function(id, callback) {
      $http.get('/users/' + id).then(callback)
	}
	factory.session = function(callback){
		var user_id = $cookies.get('user_id');
		if(!user_id){
			return callback(false);
		}
		$http.get('/users/' + user_id).then(function(res){
			if(res.data.errors){
				return callback(false)
			}
			return callback(res.data);
		})
	}
	factory.updateStatus = function(id, callback){
		$http.put('/bucketlists/' + id).then(callback)
	}

	return factory;
});