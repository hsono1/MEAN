app.controller( 'newController', ['friendsFactory', '$scope', '$location', function(friendsFactory, $scope, $location,  $routeParams){


	var formatDate = function(data)
	{
		var year = data.substr(0,4);
		var month = data.substr(5,2);
		month = Number(month);
		var day = data.substr(8,2);
		var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return months[month] + " " + day + ", " + year;

	}

	$scope.friendCreatedMessage = function()
	{
		$scope.messages = friendsFactory.getFriendCreationMessage();
	}
	

	$scope.index = function(){

		$scope.friendCreatedMessage();

		friendsFactory.index( function(data){
			$scope.friends = data.data;
			for( var idx = 0; idx < data.data.length; idx++)
			{
				$scope.friends[idx].birthdate = formatDate(data.data[idx].birthdate);
			}
			
		});


	}

	$scope.index();

	$scope.goToNew = function(){
		$location.path('/new');
	}

	$scope.createFriend = function(){

		friendsFactory.createFriend($scope.friend, $scope.index);
	}

	$scope.deleteFriend = function(friend_object)
	{

		friendsFactory.deleteFriend(friend_object, $scope.index);


	}

}]);