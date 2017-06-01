app.controller('FriendController', function(FriendFactory, $location, $routeParams){
	console.log('initializing controller')
	console.log($routeParams)
	var self = this;
	self.friends = [];
	self.friend = {};
	self.errors = [];
	
	self.index = function(){
		FriendFactory.index(function(res){
			self.friends = res.data;
		});
	};
	self.create = function(newFriend){
		self.errors = [];
		FriendFactory.create(newFriend, function(res){
			// console.log(res)
			self.newFriend = {};
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error.message)
				}
			} else {
				$location.url('/');
			};
		});
	};
	self.update = function(friend){
		// console.log(friend)
		FriendFactory.update($routeParams.id, friend, function(res){
			// console.log(friend)
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.errors.push(error.message)
				}
			} else {
				// console.log(self.friend)
				$location.url('/')
				self.friend = res.data
			};
		});
	};
	self.show = function(){
		FriendFactory.show($routeParams.id, function(res){
			// console.log(res.data)
			self.friend = res.data
		});
	};
	self.destroy = function(friend){
		// console.log(friend)
		FriendFactory.destroy(friend._id, self.index)
	}
})