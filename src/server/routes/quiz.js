'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Quiz = require('../models/quiz');

// GET ALL THE QUIZZES
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
	User.findById("57aa8ef976dd6cb1056e500a", function (err, doc) {
		if (err) {
			return res.status(500).json({
				code: 500,
				message: "An error occurred while getting the user",
				error: err
			});
		}

		if (!doc) {
			return res.status(404).json({
				code: 404,
				message: "Could not find the user by id"
			});
		}

		var user = doc;
		var quiz = new Quiz({
			image: req.body.image,
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

			user.push(result);
			user.save(function (err, result) {
				if (err) {
					return res.status(500).json({
						code: 500,
						message: "An error occurred while assigning the quiz to the user",
						error: err
					});
				}
				res.status(200).json({
					code: 200,
					message: "Quiz assigned to User",
				});
			});
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

// Get the Quizzes created by the User
// Move to user route

// router.get('/userquizzes', function (req, res, next) {
// 	User.findById("57aa8ef976dd6cb1056e500a", function (err, doc) {
// 		if (err) {
// 			return res.status(500).json({
// 				code: 500,
// 				message: "An error occurred while getting the user",
// 				error: err
// 			});
// 		}
// 	}).populate('quizzes').exec(function(err, docs) {
// 		if (err) {
// 			return res.status(500).json({
// 				message: 'An error occured',
// 				error: err
// 			});
// 		}
// 		res.status(200).json({
// 			message: 'Success',
// 			obj: docs
// 		});
// 	});
// });

module.exports = router;

