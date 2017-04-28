var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({

	name : String

});

mongoose.model('Friend', FriendsSchema);
