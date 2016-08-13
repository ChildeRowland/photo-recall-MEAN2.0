'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

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


// PROTECTED ROUTES

router.use('/', function (req, res, next) {
	var token = req.get('Authorization');
	var salt = req.get('Salt');
	
	jwt.verify(token, salt, function(err, decoded) {
        if (err) {
            return res.status(401).json({
                message: "Not Authorized",
                error: err
            });
        }
        if (!decoded) {
        	return res.status(404).json({
        		code: 404,
        		message: "Could not find this user"
        	});
        }
        if (decoded) {
        	User.findById(decoded.user, function (err, doc) {
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
				if (doc) {
					req.user = doc;
					next();
				}
			});
        }
    });
});


// ADD A QUIZ
router.post('/', function (req, res, next) {
	var user = req.user;
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

		user.quizzes.push(result);
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

// Runs with any route path containing "id"
router.param('id', function(req, res, next) {
	var user = req.user;
	var quizId = req.params.id;
	console.log(user.quizzes.indexOf(quizId));
	// check the user for the quiz id in the quizzes array
	if ( user.quizzes.indexOf(quizId) >= 0 ) {
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
			} else {
				// add the document to the request object
				req.quiz = doc;
				next();
			}
		});
	} else {
		return res.status(400).json({
			code: 400,
			message: "Not Authorized to change this quiz"
		});
	}
});

router.route('/:id')
	// .all(function (req, res, next) {})
	// GET A SINGLE QUIZ BY ID
	.get(function (req, res, next) {
		console.log(req.quiz);
		res.status(202).json({
			code: 202,
			message: "Success getting the quiz",
			obj: req.quiz
		});
	})
	.patch(function(req, res, next) {
		return new Error("Not yet Implemented");
	})
	// DELETE A SINGLE QUIZ
	.delete(function (req, res, next) {
		var quiz = req.quiz;

		quiz.remove(function (err, result) {
			if (err) {
				return res.status(500).json({
					code: 500,
					message: "Could not delete the Quiz",
					error: err
				});
			}
			res.status(200).json({
				code: 200,
				message: "Quiz deleted",
				obj: result
			});
		});
	});

router.route('/:id/question')
	// ADD A QUESTION TO A QUIZ
	.post(function (req, res, next) {
		if (req.quiz) {
			var quiz = req.quiz;
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
					obj: quiz
				});
			});
		}
	})
	// UPDATE A SINGLE QUESTION
	.patch(function (req, res, next) {
		if (req.quiz) {
			var quiz = req.quiz;
			var question = quiz.questions.id(req.body._id);

			if (!question) {
				return res.status(404).json({
					code: 404,
					message: "Could not find Question"
				});
			}
				
			question.question = req.body.question;
			question.answers = req.body.answers;
			question.hints = req.body.hints;

			quiz.save(function (err, result) {
				if (err) {
					return res.status(500).json({
						code: 500,
						message: "There was an error while trying to update the question",
						error: err
					});
				}
				res.status(202).json({ 
					code: 202,
					message: "Question updated",
					obj: question
				});
			});
		}
	})
	// DELETE A SINGLE QUESTION
	.delete(function (req, res, next) {
		if (req.quiz) {
			var quiz = req.quiz;
			var question = quiz.questions.id(req.body._id);

			if (!question) {
				return res.status(404).json({
					code: 404,
					message: "Could not find the Question"
				});
			}

			question.remove();
			quiz.save(function (err, result) {
				if (err) {
					return res.status(500).json({
						code: 500,
						message: "An error occured while trying to delete the Question",
						error: err
					});
				}
				res.status(200).json({
					code: 200,
					message: "Question deleted",
					obj: question
				});
			});
		}
	});


module.exports = router;

