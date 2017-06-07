var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'UserController as UC'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'UserController as UC'
	})
	.when('/users/:id', {
		templateUrl: 'partials/user_blist.html',
		controller: 'UserController as UC'
	})
	.otherwise({redirectTo: '/'})
})