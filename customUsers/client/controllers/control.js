app.controller('userControllers', ['$scope', 'myFactory', function($scope, myFactory){

	$scope.users = [];

	$scope.index = function(){

		$scope.users = myFactory.getUsers();
	}


	$scope.setUsers = function(users){

		$scope.users = users;

	}




	$scope.createUser = function(){

		myFactory.createUser($scope.user, $scope.index);
		$scope.user = {};


	}

	$scope.deleteUser = function(index){

		myFactory.deleteUser(index, $scope.index);


	}

	$scope.index();







} ]);



app.controller('listControllers', ['$scope', 'myFactory', function($scope, myFactory){

	$scope.users = [];

	$scope.index = function(){

		$scope.users = myFactory.getUsers();
	}


	$scope.index();




} ]);