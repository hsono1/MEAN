var controller = require('./../controllers/friends.js');

module.exports = function(app){


	app.get('/friends', function(req, res) {
	  controller.show(req, res);
	});
	app.get('/friends/:id', function(req, res) {
	  controller.index(req, res);
	});
	app.post('/friends/create', function(req, res) {
	  controller.create(req, res);
	});
	app.post('/friends/update/:id', function(req, res) {
	  controller.update(req, res);
	});
	app.delete('/friends/delete/:id', function(req, res) {
	  controller.delete(req, res);
	});
}