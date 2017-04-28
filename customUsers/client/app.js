var app = angular.module('myApp', ['ngRoute']);



app.config( function($routeProvider){


	$routeProvider
	.when( '/', {  templateUrl : './partials/users.html'      })
	.when( '/list', {  templateUrl : './partials/list.html'      })
	.otherwise( { redirectTo : '/'  }  );





});