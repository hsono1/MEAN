app.factory( 'teamsFactory' , [ function(){
	var factory = {};
	var teams = [];

	factory.getTeams = function(){

		return teams;
	}

	factory.addTeam = function(team, callback)
	{
		teams.push(team);
		callback( factory.getTeams());
	}

	factory.removeTeam = function(index)
	{
		teams.splice(index, 1);
	}

	return factory;
}]);