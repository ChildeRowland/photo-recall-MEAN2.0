'use strict';

var mongoose 	= 	require('mongoose');
var Schema 		= 	mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');


var userSchema = new Schema({
	name: { type: String },
	email: { type: String, unique: true },	
	password: { type: String, required: true },
	salt: { type: String, required: true },
	state: { type: String, enum: [ 'basic', 'super', 'admin' ], default: 'basic' }
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);