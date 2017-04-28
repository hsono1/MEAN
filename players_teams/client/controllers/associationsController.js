app.controller( 'associationsController', ['$scope', 'associationsFactory', 'teamsFactory', 'playersFactory', function($scope, associationsFactory, teamsFactory, playersFactory){
	$scope.index = function()
	{
		$scope.assignments = associationsFactory.getAssignments();
	}

	$scope.addAssociation = function()
	{
		associationsFactory.addAssociation($scope.association);
	}


	$scope.clearAssociation = function($index)
	{
		associationsFactory.clearAssociation($index);
	}

	$scope.getTeams = function()
	{
		$scope.teams = teamsFactory.getTeams();

	}


	$scope.getPlayers = function()
	{
		$scope.players = playersFactory.getPlayers();

	}


	$scope.index();
	$scope.getPlayers();
	$scope.getTeams();



}]);