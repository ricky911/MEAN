app.controller('BListController', function(BListFactory, UserFactory, $routeParams, $cookies, $location){
	console.log('reached BLC')
	var self = this
	self.newItem_errors = []
	self.blists = []

	self.index = function(){
		BListFactory.index(function(response){
			self.blists = response.data 
			console.log(self.blists)
		})
	},

	self.create = function(){
		self.newItem_errors = []
		UserFactory.session(function(user){
			self.newItem.user = user._id
			BListFactory.create(self.newItem, function(res){
					if(res.data.errors){
						for(key in res.data.errors){
							var error = res.data.errors[key]
							self.newItem_errors.push(error.message)
						}
					}
					else {
						self.session()
						self.newItem = {}
					}
			})
		})
	}
})