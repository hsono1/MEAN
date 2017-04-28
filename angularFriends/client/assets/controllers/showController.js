app.controller( 'showController', ['friendsFactory', '$scope', '$location', '$routeParams', function(friendsFactory, $scope, $location,  $routeParams){

	var formatDate = function(data)
	{
		var year = data.substr(0,4);
		console.log( year);
		var month = data.substr(5,2);
		console.log(month);
		month = Number(month);
		console.log(month);
		var day = data.substr(8,2);
		console.log(day);

		var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return months[month] + " " + day + ", " + year;

	}




	$scope.showFriend = function(){


		friendsFactory.showFriend( $routeParams, function(data){

			$scope.friend = data;
			$scope.friend.birthdate = formatDate(data.birthdate);
			$scope.friend.createdAt = formatDate(data.createdAt);

		});


	}

	$scope.showFriend()




}]);