app.controller('UserController', function(UserFactory, $location, $routeParams, $cookies){
	console.log('reached contorller')
	var self = this;
	self.users = [];
	self.user = {};
	self.errors = [];

	self.index = function(){
		UserFactory.index(function(res){
			self.users = res.data;
		});
	};
	self.create = function(newUser){
		self.errors = [];
		UserFactory.create(newUser, function(res){
			console.log(res)
			self.newUser = {};
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error.message)
				}
			} else {
				var user_id = res.data._id
				$cookies.put('user_id', user_id)
				$location.url('/dashboard');
			};
		});
	};
});