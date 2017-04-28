app.factory( 'friendsFactory', ['$http', '$location',  function($http, $location){

	var factory = {};
	var messages = [];


	factory.getFriendCreationMessage = function(){

		return messages;
	}

	factory.index = function ( callback){

		$http.get('/friends').then( function(returned_data){
		

			console.log('back from server in factory index', returned_data);
			callback(returned_data);

		})




	}

	factory.createFriend = function( friendObject, callback){

		$http.post( '/friends/create' , friendObject ).then( function(returned_data){

				console.log('back from server in factory created', returned_data);
				messages = [];
				if( returned_data.data.message !== undefined )
				{
					messages.push('Add Friend could not be completed');
				}
				else
				{
					messages.push( returned_data.data.first_name + " has been created successfully.");
				}
				
				callback();
				$location.path('/');

		});




	}

	factory.deleteFriend = function(friend_object, callback)
	{
		$http.delete('/friends/delete/' + friend_object._id).then( function(returned_data){
			messages = [];
			console.log("back from server in factory delete", returned_data);
			if( returned_data.data.message !== undefined )
			{
				messages.push('Delete could not be completed');
			}
			else
			{
				messages.push(friend_object.first_name + " has been deleted successfully.");
			}
			callback();

		})


	}



	factory.showFriend = function(object_friend_id, callback){

		$http.get('/friends/' + object_friend_id.friend_id).then( function(returned_data){
			console.log(returned_data);
			callback(returned_data.data);



		});


	}



	factory.updateFriend = function(friend, callback){

		$http.post('/friends/update/' + friend._id, friend).then( function(returned_data){

			messages = [];
			messages.push('Friend was updated successfully');
			callback(returned_data.data);

		});

	}









	return factory




}]);