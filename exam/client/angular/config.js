var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/login.html',
		controller: 'UserController as UC'
	})
	.when('/index', {
		templateUrl: '/partials/dashboard.html',
		controller: 'UserController as UC'
	})
	.when('/new_question', {
		templateUrl: '/partials/new_question.html',
		controller: 'UserController as UC'
	})
	.when('/question/:id', {
		templateUrl: '/partials/question.html',
		controller: 'UserController as UC'
	})
	.when('/question/:id/new_answer', {
		templateUrl: '/partials/new_answer.html',
		controller: 'UserController as UC'
	})
	.otherwise({redirectTo:'/index'})
})