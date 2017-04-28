var app = angular.module('myApp', []);


app.filter('capital', function(){

	return function(input){

		return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();

	};



});




