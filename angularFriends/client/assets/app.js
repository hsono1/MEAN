var app = angular.module('myApp', ['ngRoute', 'angularCSS']);


app.filter( 'days', function(){

	return function(items, type, search){

		if( search  == undefined){
			return items;
		}
		else
		{

			var returned_items = [];

			for ( var idx = 0 ; idx < items.length; idx++)
			{
				var date = new Date(items[idx].birthdate);
				date = date.getDate();
				date = date + "";
				if( date.indexOf(search) !== -1)
				{
					returned_items.push(items[idx]);
				}
			}

			return returned_items;
	
		


		}






	}

});





app.config( function($routeProvider){


	$routeProvider
	.when( '/' , { templateUrl : './assets/partials/main.html', controller : 'newController', css: './assets/static/styles.css'})
	.when( '/new' , { templateUrl : './assets/partials/new.html', controller : 'newController' , css: './assets/static/new.css'})
	.when( '/show/:friend_id' , { templateUrl : './assets/partials/show.html', controller : 'showController' , css: './assets/static/new.css'})
	.when( '/update/:friend_id' , { templateUrl : './assets/partials/edit.html', controller : 'editController' , css: './assets/static/new.css'})
	.otherwise( { redirectTo :  '/' });


});