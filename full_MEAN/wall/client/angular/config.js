var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/new_user.html',
		controller: 'UserController as UC'
	})
	.when('/dashboard', {
		templateUrl: '/partials/dashboard.html',
		controller: 'UserController as UC'
	})
	.otherwise({redirectTo: '/'})
})