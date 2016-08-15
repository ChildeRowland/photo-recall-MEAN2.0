var express = require('express');
var path = require('path');
var router = express.Router();
var multer = require("multer");

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

router.post('/', upload.array('newImage', 12), function(req, res) {
	// use this to save the location of the file to the db
	console.log(req.get('X-Authentication'));
	console.log(req.files[0].adjustedName);

    res.send(req.files);
});

module.exports = router;

/*

destination: "./public/uploads/"
encoding: "7bit"
fieldname: "uploads[]"
filename: "48472412b3b5858f61bbf5da89a11e1d"
mimetype: "image/jpeg"
originalname: "qrcode.jpeg"
path: "public/uploads/48472412b3b5858f61bbf5da89a11e1d"
size: 30027

*/