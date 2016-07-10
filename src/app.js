var express 		= 	require('express');
var path 			= 	require('path');
// var favicon = require('serve-favicon');
// var logger 			= 	require('morgan');
// var cookieParser 	= 	require('cookie-parser');
// var bodyParser 		= 	require('body-parser');

//var name = require('./server/models/user');

var app = express();
var port = process.env.PORT || 3000;

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(__dirname));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname,'index.html'))
});

//catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.listen(port, function () {
	console.log('Express server started on port ' + port);
});


module.exports = app;
