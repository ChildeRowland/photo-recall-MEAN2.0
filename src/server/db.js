var env = process.env.NODE_ENV || 'development';
var db;

if ( env === 'production' ) {
	db = 'mongolab';
} else {
	db = 'localhost:27017/cmex-deletable';
}

module.exports = db;