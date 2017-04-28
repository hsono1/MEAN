app.factory( 'associationsFactory' , [ function(){
	var factory = {};
	var associations = [];

	factory.getAssignments = function()
	{
		return associations;
	}

	factory.addAssociation = function(association)
	{
		associations.push( {  player_name : association.player_name , team_name : association.team_name });
	}


	factory.clearAssociation = function(index)
	{
		associations.splice(index, 1);
	}



	return factory;
}]);