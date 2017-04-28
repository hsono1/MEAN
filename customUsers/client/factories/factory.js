app.factory('myFactory', [function(){

	var factory = {};

	var users = [];

	factory.getUsers = function()
	{
		return users;
	}



	factory.createUser = function(user, callback){

		users.push(user);
		callback();

	}


	factory.deleteUser = function(index, callback){

		users.splice(index,1);
		callback();

	}



	return factory;
}]);