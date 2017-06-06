app.controller('UserController', function(UserFactory, $location, $cookies, $routeParams){
	console.log('reached UserController')
	var self = this;
	self.users = [];
	self.user = {};
	self.login_err = [];
	self.reg_err = [];

	self.index = function(){
		UserFactory.index(function(res){
			self.users = res.data
		})
	}

	self.create = function(newUser){
		UserFactory.create(newUser, function(res){
			self.newUser = {};
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.reg_err.push(error.message)
				}
			} else {
				console.log(res.data)
				var user_id = res.data._id
				$cookies.put('user_id', user_id)
				$location.url('/dashboard');
			};
		})
	}

	self.show = function(){
		UserFactory.show($routeParams.id, function(res){
			self.user = res.data
		})
	}

	self.login = function(user){
		self.login_err = [];
		UserFactory.login(user, function(res){
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.login_err.push(error.message)
				}
			} else {
				$cookies.put('user_id', res.data._id);
				$location.url('/dashboard');
			}
		})
	}

	self.logout = function(){
		$cookies.remove('user_id');
		$location.url('/');
	}

	self.check = function(){
		UserFactory.check(function(user){
			if(user){
				self.user = user;
			} else {
				$location.url('/dashboard');
			}
		})
	}

})