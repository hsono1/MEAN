app.controller('productController', ['$scope', 'myFactory', function($scope, myFactory){

	$scope.products = [];


	$scope.setProducts = function(items){

		$scope.products = items;
		$scope.product = {};
	};

	$scope.addProduct = function(){

			$scope.product.quantity = 50;
			myFactory.addProduct($scope.product, $scope.setProducts);

	};

	$scope.deleteProduct = function(index){

		myFactory.deleteProduct(index, $scope.setProducts);


	};





}]);

app.controller('orderController', ['$scope','myFactory', function($scope, myFactory){


	$scope.setProducts = function(items){
		$scope.products = items;
	}

	$scope.buyProduct = function(index){
		myFactory.buyProduct(index, $scope.setProducts);
	}

	
	myFactory.setProducts($scope.setProducts);



}]);