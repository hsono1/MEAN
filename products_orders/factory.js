

app.factory('myFactory', [function(){

	var factory = {};
	var products = [];

	factory.setProducts = function(callback){
		callback(products);
	}

	factory.addProduct = function(item, callback){

		products.push(item);
		callback(products);

	}

	factory.deleteProduct = function(index, callback){

		products.splice(index, 1);
		callback(products);

	};

	factory.buyProduct = function(index, callback)
	{
		products[index].quantity--;
		callback(products);
	}

	return factory;

}]);

