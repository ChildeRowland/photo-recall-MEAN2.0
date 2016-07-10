'use strict';

var mongoose 	= 	require('mongoose');
var Schema 		= 	mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');


var userSchema = new Schema({
	name: { type: String }
	email: { type: String, required: true },	
	password: { type: String, unique: true }
	state: { type: String, enum: [ 'basic', 'super', 'admin' ] }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);