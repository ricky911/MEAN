app.controller('UserController', function(UserFactory, BListFactory, $location, $routeParams, $cookies){
	console.log('reached UC')
	var self = this
	self.current_user = {}
	self.users = []
	self.user = {}
	self.errors = []

	self.session = function(){
		UserFactory.session(function(user){
			console.log(user)
			if(user){
				console.log(user)
				self.current_user = user
			} else {
				$location.url('/')
			}
		})
	},

	self.index = function(){
		UserFactory.index(function(res){
			self.users = res.data
		})
	},

	self.create = function(newUser){
		self.errors = []
		UserFactory.create(newUser, function(res){
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error.message)
				}	
			} else {
				var user_id = res.data._id
				$cookies.put('user_id', user_id)
				$location.url('/dashboard')
			}
		})
	},

	self.createItem = function(){
		self.newItem_errors = []
		UserFactory.session(function(user){
			self.newItem.user = user._id
			BListFactory.create(self.newItem, function(res){
				if(res.data.errors){
					for(key in res.data.errors){
						var error = res.data.errors[key]
						self.newItem_errors.push(error.message)
					}
				} else {
					self.session()
					self.newItem = {}
				}
			})
		})
	},

	self.show = function(){
		UserFactory.show($routeParams.id, function(res){
			self.user = res.data
			return self.user
		})
	},

	self.updateCheck = function(bList_id){
		UserFactory.updateCheck(bList_id, self.session)
	},

	self.logout = function(){
		$cookies.remove('user_id')
		$location.url('/')
	}
})