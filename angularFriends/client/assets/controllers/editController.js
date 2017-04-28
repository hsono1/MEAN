app.controller( 'editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location){

	$scope.showFriend = function(){


		friendsFactory.showFriend( $routeParams, function(data){

			data.birthdate = new Date(data.birthdate);
			$scope.friend = data;

		});


	}

	$scope.showFriend();


	$scope.updateFriend = function(friend_id){

		console.log($routeParams);
		console.log(friend_id);
		friendsFactory.updateFriend($scope.friend, function(data){

			$scope.friend = data;
			$location.path('/');

		});


	}

	



}]);