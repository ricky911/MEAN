app.factory('BListFactory', function($http, $cookies){
	var factory = {};

	factory.index = function(callback){
		$http.get('/bucketlists').then(callback)
	}
	factory.create = function(newItem, callback){
		$http.post('/bucketlists/create', newItem).then(callback)
	}

	return factory;

})