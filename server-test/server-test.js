'use strict';

process.env.NODE_ENV = 'server-tests';

var chai = require('chai');
// var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

// var server = require('../src/app.js');
var should = chai.should();
// chai.use(chaiHttp);


describe('Moch Test', function() {
	var db;

	before(function(done) {
		db = require('../src/server/db');
		mongoose.connect(db);
		done();
	});

	after(function(done) {
		mongoose.connection.close(function() {
			done();
		});
	});

	describe('Sanity Test', function() {
		it('True should be true', function() {
	  		true.should.equal(true);
	  	});
	});


	describe('Database', function() {
		it('Should connect to the test database', function() {
			should.exist(db);
		});
	});

});







