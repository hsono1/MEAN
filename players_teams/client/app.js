var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider){

	$routeProvider
	.when( '/players', { templateUrl : './static/partials/players.html', controller : 'playersController'})
	.when( '/teams', { templateUrl : './static/partials/teams.html', controller: 'teamsController' } )
	.when( '/associations' , { templateUrl : './static/partials/associations.html', controller : 'associationsController'} )
	.otherwise( { redirectTo : '/players'})


});


