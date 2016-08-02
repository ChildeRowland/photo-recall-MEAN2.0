'use strict';

process.env.NODE_ENV = 'server-tests';

var chai = require('chai');
var mongoose = require('mongoose');

var should = chai.should();
var User = require('../../src/server/models/user');
var db = require('../../src/server/db');


describe('User', function() {
	var resData;

	describe('Save with complete credentials', function() {

		before((done) => {
			mongoose.connect(db);
			User.collection.drop();

			var user = new User({ name: 'Bill Finger', email: 'bf@email.com', password: 'batman', salt: '1234' });
			user.save((err, data) => {
				if (err) {
					console.log(err);
				} else {
					resData = data;
					done();
				}
			});
		});

		after((done) => {
			User.collection.drop(function() {
				mongoose.connection.close(function() {
					done();
				});
			});
		});


		it('Should create a new user correctly without errors', function() {
			resData.name.should.equal('Bill Finger');
			resData.email.should.equal('bf@email.com');
			resData.password.should.equal('batman');
			resData.salt.should.equal('1234');
			should.exist(resData.id);
		});

		it('Should default the user state to basic', function() {
			resData.state.should.equal('basic');
		})
	});

	describe('Save with partial credentials', function() {
		before(function(done) {
			mongoose.connect(db);
			User.collection.drop();

			var user = new User({ name: 'Bill Finger' });
			user.save((err, data) => {
				if (err) {
					resData = err;
					done();
				} else {
					resData = data;
					done();
				}
			});
		});

		after(function(done) {
			User.collection.drop(function() {
				mongoose.connection.close(function() {
					done();
				});
			});
		});

		it('Should not save with just a name property', function() {
			console.log(resData);
		});

	});
});