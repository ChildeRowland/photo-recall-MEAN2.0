var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/', function (req, res, next) {
	var user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			state: 'basic'
		});

	user.save(function (err, result) {
		if (err) {
			return res.status(500).json({
				message: "An error occured while trying to save",
				error: err
			});
		}
		res.status(200).json({
			message: "User created",
			obj: result
		});
	});
});


module.exports = router;