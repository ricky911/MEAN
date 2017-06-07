var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/login.html',
		controller: 'UserController as UC'
	})
	.otherwise({redirectTo: '/'})
})