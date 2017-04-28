app.factory( 'playersFactory' , [function(){
	var factory = {};
	var players = [];

	factory.getPlayers = function(){

		return players;
	}

	factory.addPlayer = function(player, callback)
	{
		players.push(player);
		callback( factory.getPlayers());
	}

	factory.removePlayer = function(index)
	{
		players.splice(index, 1);
	}

	return factory;
}]);