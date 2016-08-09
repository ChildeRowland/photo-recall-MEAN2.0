'use strict';

var express = require('express');
var router = express.Router();

var Quiz = require('../models/quiz');

// GET ALL THE QUIZZES OF THE USER
router.get('/', function (req, res, next) {
	Quiz.find(function (err, result) {
		if (err) {
			return res.status(500).json({
				code: 500,
				message: "An error occurred while getting quizzes",
				error: err
			});
		}
		res.status(202).json({
			code: 202,
			message: "Success getting the quizzes",
			obj: result
		});
	});
});

// GET SINGLE QUIZ BY ID
router.get('/:id', function (req, res, next) {
	Quiz.findById(req.params.id, function (err, doc) {
		if (err) {
			return res.status(500).json({
				code: 500,
				message: "An error occurred while getting this quiz",
				error: err
			});
		}
		if (!doc) {
			return res.status(404).json({
				code: 404,
				message: "No quiz found"
			});
		}
		res.status(202).json({
			code: 202,
			message: "Success getting the quiz",
			obj: doc
		});
	});
});

// ADD A QUIZ
router.post('/', function (req, res, next) {
	var quiz = new Quiz({
		image: req.body.image
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

// ADD A QUESTION TO A QUIZ
router.post('/:id/question', function (req, res, next) {
	Quiz.findById(req.params.id, function (err, doc) {
		if (err) {
			return res.status(500).json({
				code: 500,
				message: "An error occurred while getting this quiz",
				error: err
			});
		}
		if (!doc) {
			return res.status(404).json({
				code: 404,
				message: "No quiz found"
			});
		}
		if (doc) {
			var quiz = doc;
			var orderNumber = quiz.questions.length + 1;
			quiz.questions.push({
				question: req.body.question,
				answers: req.body.answers,
				hint: req.body.hint,
				order: orderNumber
			});

			quiz.save(function (err, result) {
				if (err) {
					return res.status(500).json({
						code: 500,
						message: "There was an error while trying to save the question",
						error: err
					});
				}
				res.status(201).json({
					code: 201,
					message: "Question added to the quiz",
					obj: doc
				});
			});
		}
	});
});

module.exports = router;

// var questionSchema = new Schema({
// 	question: { type: String, required: true },
// 	answers: { type: String, required: true },
// 	hint: { type: String, required: true },
// 	order: { type: String }
// });

