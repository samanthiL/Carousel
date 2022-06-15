var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	// userid:String,
	username: String,
	fname:String,
	lname:String,
	password: String
}),

user = mongoose.model('user', userSchema);

module.exports = user;