var express = require('express');
var path = require('path');
var router = express.Router();
var multer = require("multer");
var upload = multer({ dest: path.join(__dirname, '../../uploads')});

router.post('/', upload.array('uploads[]', 12), function(req, res) {
	console.log(req.files);

    res.send(req.files);
});

module.exports = router;

// app.post("/upload", multer({dest: "./uploads/"}).array("uploads[]", 12), function(req, res) {
//     res.send(req.files);
// });


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