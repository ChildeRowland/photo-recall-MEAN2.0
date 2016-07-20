var express = require('express');
var router = express.Router();
var scrypt = require('js-scrypt');
var jwt = require('jsonwebtoken');

var config = require('../config').security;
var User = require('../models/user');

router.post('/', function (req, res, next) {
	var userSalt = config.addSalt();
	
	scrypt.hash(req.body.password, userSalt, function(err, result) {
		if (err) {
			return res.status(500).json({
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
						message: "An error occurred while saving user info",
						error: err
					});
				}
				res.status(201).json({
					message: "User created",
					obj: result
				});
			});
		}
	});
});

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

					jwt.sign({ user: doc }, tokenSalt, { expiresIn: 7200 }, function (err, token) {
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

module.exports = router;