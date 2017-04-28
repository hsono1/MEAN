app.controller( 'playersController', ['$scope', 'playersFactory', function($scope, playersFactory){

	$scope.index = function()
	{
		$scope.players = playersFactory.getPlayers();
	}

	$scope.addPlayer = function()
	{
		playersFactory.addPlayer($scope.player, $scope.index);
		$scope.player = {};
	}

	$scope.removePlayer = function(index)
	{
		playersFactory.removePlayer(index);
	}




	$scope.index();



}]);
