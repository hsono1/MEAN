var controller = require('./../controllers/controller.js');

module.exports = function(app){


	app.get('/friends', function(req, res) {
	  controller.show(req, res);
	});
	app.get('/friends/:id', function(req, res) {
	  controller.index(req, res);
	});
	app.get('/friends/create/:id', function(req, res) {
	  controller.create(req, res);
	});
	// app.put('/friends/:id', function(req, res) {
	//   friends.update(req, res);
	// });
	app.get('/friends/delete/:id', function(req, res) {
	  controller.delete(req, res);
	});
}