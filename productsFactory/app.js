var app = angular.module('myApp', []);


app.factory('myFactory', [ function(){

	var factory = {};
	var products = [];

	factory.addProduct = function(item, callback){

		products.push(item);
		callback(products);

	}

	factory.deleteProduct = function(index, callback){

		products.splice(index, 1);
		callback(products);

	}



	return factory;

}]);


app.controller('myController', ['myFactory', '$scope', function(myFactory, $scope){

	$scope.products = [];
	$scope.product = {};


	$scope.setProducts = function(items){

		$scope.products = items;
		$scope.product = {};
	}


	$scope.deleteProduct = function($index){

		myFactory.deleteProduct($index, $scope.setProducts);
	}


	$scope.addProduct = function(){

		myFactory.addProduct( $scope.product, $scope.setProducts);


	}

	$scope.isort = function(){

		if($scope.reverse == true)
		{
			$scope.reverse = false;
		}
		else
		{
			$scope.reverse = true;
		}

	}






}]);