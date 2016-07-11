var express 		= 	require('express');
var path 			= 	require('path');
var mongoose		= 	require('mongoose');
var db				= 	require('./server/db');
// var favicon = require('serve-favicon');
var logger 			= 	require('morgan');
var cookieParser 	= 	require('cookie-parser');
var bodyParser 		= 	require('body-parser');

var userRoutes = require('./server/routes/user');
var appRoutes = require('./server/routes/app');

var app = express();
var port = process.env.PORT || 3000;
mongoose.connect(db);

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});

// app.get('/*', function (req, res) {
// 	res.sendFile(path.join(__dirname,'index.html'))
// });

app.use('/user', userRoutes);
app.use('/', appRoutes);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Server Not Found');
	err.status = 404;
	next(err);
});

app.listen(port, function () {
	console.log('Express server started on port ' + port);
});


module.exports = app;
