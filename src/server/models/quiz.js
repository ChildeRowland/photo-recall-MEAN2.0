'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var questionSchema = new Schema({
	question: { type: String, required: true },
	answers: { type: String, required: true },
	hint: { type: String, required: true },
	order: { type: Number }
});

var quizSchema = new Schema({
	image: { type: String, unique: true, required: true },
	questions: [questionSchema]
});

quizSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Quiz', quizSchema);

