app.controller( 'teamsController', ['$scope', 'teamsFactory', function($scope, teamsFactory){

	$scope.index = function()
	{
		$scope.teams = teamsFactory.getTeams();
	}

	$scope.addTeam = function()
	{
		teamsFactory.addTeam($scope.team, $scope.index);
		$scope.team = {};
	}

	$scope.removeTeam = function(index)
	{
		teamsFactory.removeTeam(index);
	}


	$scope.index();



}]);