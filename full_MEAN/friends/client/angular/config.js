var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
	console.log($routeProvider)
	$routeProvider
	.when('/', {
		templateUrl: '/partials/friends.html',
		controller: 'FriendController as FC'
	})
	.when('/new', {
		templateUrl: '/partials/new.html',
		controller: 'FriendController as FC'
	})
	.when('/show/:id', {
		templateUrl: '/partials/show.html',
		controller: 'FriendController as FC'
	})
	.when('/edit/:id', {
		templateUrl: '/partials/edit.html',
		controller: 'FriendController as FC'
	})
	.when('/delete/:id', {
		templateUrl: '/partials/friends.html',
		controller: 'FriendController as FC'
	})
	.otherwise({redirectTo: '/'})
})