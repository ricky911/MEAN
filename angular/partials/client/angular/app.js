var app = angular.module('myApp', ['ngRoute']);

//set up routing via config
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/customizeUsers.html',
		controller: 'CustomizeUsersController as CUC'
	})
	.when('/userList', {
		templateUrl: 'partials/userList.html',
		controller: 'UserList as UL'
	})
	.otherwise({
		redirectTo: '/'
	})
});

//factory
app.factory('UserFactory', function(){
	var factory = {};
	factory.users = [];

	factory.getUsers = function(callback){
		callback(this.users);
	};
	factory.addUsers = function(newUser, callback){
		this.users.push(newUser);
		callback();
	};
	factory.delUsers = function(user, callback){
		var x = this.users.indexOf(user);
		this.users.splice(x, 1);
		callback();
	};

	return factory;
});

//controllers
app.controller('CustomizeUsersController', function(UserFactory){
	var self = this;
	self.getUsers = function(){
		UserFactory.getUsers(function(users){
			self.users = users
		});
	};
	self.addUsers = function(newUser){
		UserFactory.addUsers(newUser, function(){
			self.getUsers();
			self.newUser = {};
		});
	};
	self.delUsers = function(user){
		UserFactory.delUsers(user, self.getUsers);
	};
});

app.controller('UserList', function(UserFactory){
	var self = this
	self.getUsers = function(){
		UserFactory.getUsers(function(users){
			self.users = users;
		});
	};
})