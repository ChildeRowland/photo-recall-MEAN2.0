var express = require('express');
var path = require('path');
var router = express.Router();
var multer = require("multer");
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Quiz = require('../models/quiz');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
    	cb(null, path.join(__dirname, '../../assets/img'));
  	},
	filename: function (req, file, cb) {
		file.adjustedName = Date.now() + '_' + file.originalname.toLowerCase().replace(' ', '_');
    	cb(null, file.adjustedName);
  	},
  	limits: { fileSize: 2000000, files: 1 }
});

var upload = multer({ storage: storage })

router.use('/', function (req, res, next) {
	var token = req.get('X-Authorization');
	var salt = req.get('X-Salt');
	
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

router.post('/', upload.array('newImage', 12), function (req, res) {
	var user = req.user;
	var quiz = new Quiz({
		image: req.files[0].adjustedName
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

module.exports = router;

/*
example multer req.file

destination: "./public/uploads/"
encoding: "7bit"
fieldname: "uploads[]"
filename: "48472412b3b5858f61bbf5da89a11e1d"
mimetype: "image/jpeg"
originalname: "qrcode.jpeg"
path: "public/uploads/48472412b3b5858f61bbf5da89a11e1d"
size: 30027

*/