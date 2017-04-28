var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({

	first_name : String,
	last_name : String, 
	birthdate : { type: Date, required : true },
}, {timestamps : true });

mongoose.model('Friend', FriendsSchema);
