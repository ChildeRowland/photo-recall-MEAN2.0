'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
	question: { type: String, required: true },
	answers: { type: String, required: true },
	hint: { type: String, required: true },
	order: { type: String }
});

var quizSchema = new Schema({
	image: { type: String }
	children: [questionSchema]
});

module.exports = mongoose.model('Quiz', quizSchema);

