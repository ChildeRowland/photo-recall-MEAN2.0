var express = require('express');
var router = express.Router();
var scrypt = require('js-scrypt');
var jwt = require('jsonwebtoken');
// create random string for salt or key
var config = require('../config').security;
var User = require('../models/user');

// NEW USER
router.post('/', function (req, res, next) {
	var userSalt = config.addSalt();
	
	scrypt.hash(req.body.password, userSalt, function(err, result) {
		if (err) {
			return res.status(500).json({
				code: 500,
				message: "An error occurred while generating credentials",
				error: err
			});
		} else {
			var user = new User({
				name: req.body.name,
				email: req.body.email,
				password: result,
				salt: userSalt,
				state: 'basic'
			});

			user.save(function (err, result) {
				if (err) {
					return res.status(500).json({
						code: 500,
						message: "An error occurred while saving user info",
						error: err
					});
				}
				res.status(201).json({
					code: 201,
					message: "User created",
					obj: result
				});
			});
		}
	});
});

// SIGNIN USER
router.post('/signin', function (req, res, next) {
	User.findOne({ email: req.body.email }, function (err, doc) {
		if (err) {
			return res.status(500).json({
				message: "An error occurred while processing the request",
				error: err
			});
		}

		if (!doc) {
			return res.status(404).json({
				code: 404,
				message: "User not found",
				error: { message: "User not found" }
			});
		}

		if (doc) {
			scrypt.hash(req.body.password, doc.salt, function(err, result) {
				if (err) {
					return res.status(500).json({
						message: "An error occurred while processing the credentials",
						error: err
					});
				}

				if ( doc.password == result ) {
					var tokenSalt = config.addSalt();

					jwt.sign({ user: doc.id }, tokenSalt, { expiresIn: 7200 }, function (err, token) {
						if (err) {
							res.status(500).json({
								message: "An error occurred while generating web token",
								error: err
							});
						}

						res.status(202).json({
							message: doc.name + " signed in",
							token: token,
							salt: tokenSalt,
							userId: doc._id
						});
					});
					
				} else {
					res.status(401).json({
						code: 401,
						message: "Invalid credentials"
					});
				}
			});
		}
	});
});

// GET THE CURRENT USER QUIZZES
router.get('/quizzes', function (req, res, next) {
	var token = req.get('Authorization');
	var salt = req.get('Salt');
	var userId;

	jwt.verify(token, salt, function(err, decoded) {
        if (err) {
            return res.status(401).json({
                message: 'Not Authorized',
                error: err
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
			// Use populate funtion to send the quizzes array with complete objects
			}).populate('quizzes').exec(function(err, doc) {
				if (err) {
					return res.status(500).json({
						message: 'An error occured',
						error: err
					});
				}
				res.status(200).json({
					message: 'Successfully got User and Quizzes',
					obj: doc
				});
			});
        }
    });
});

module.exports = router;
