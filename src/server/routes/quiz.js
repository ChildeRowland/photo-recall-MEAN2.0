'use strict';

var express = require('express');
var router = express.Router();

var Quiz = require('../models/quiz');

router.post('/', function (req, res, next) {
	var quiz = new Quiz({
		image: req.body.image;
	});

	quiz.save(function (err, result) {
		if (err) {
			return res.status(500).json({
				code: 500,
				message: "An error occurred while saving quiz info",
				error: err
			});
		}
		res.status(201).json({
			code: 201,
			message: "Quiz created",
			obj: result
		});
	});
});

// var questionSchema = new Schema({
// 	question: { type: String, required: true },
// 	answers: { type: String, required: true },
// 	hint: { type: String, required: true },
// 	order: { type: String }
// });

// var quizSchema = new Schema({
// 	image: { type: String }
// 	children: [questionSchema]
// });