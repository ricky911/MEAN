var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/players.html',
		controller: 'PlayerController as PC'
	})
	.when('/teams', {
		templateUrl: 'partials/teams.html',
		controller: 'TeamController as TC'
	})
	.when('/associations', {
		templateUrl: 'partials/associations.html',
		controller: 'AssociationController as AC'
	})
	.otherwise({
		redirectTo: '/'
	});
});