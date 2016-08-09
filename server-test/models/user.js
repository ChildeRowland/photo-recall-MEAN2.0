'use strict';

process.env.NODE_ENV = 'server-tests';

var chai = require('chai');
var mongoose = require('mongoose');

var should = chai.should();
var expect = chai.expect;
var User = require('../../src/server/models/user');
var db = require('../../src/server/db');


describe('User', function() {
	var resData;
	var user;

	describe('Save with complete credentials', function() {

		before((done) => {
			mongoose.connect(db);
			User.collection.drop();

			user = new User({ name: 'Bill Finger', email: 'bf@email.com', password: 'batman', salt: '1234' });
			user.save((err, data) => {
				if (err) {
					conslole.log(err);
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

		describe('Attempt to save with unacceptable credentials', function() {
			
			afterEach(function() {
				resData = null;
				user = null;
			});

			describe('Attempt to save with just a name value', function() {
				before(function(done) {
					user = new User({ name: 'Bill Finger' });
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

				it('Should not save with just a name property', function() {
					expect(resData).to.have.deep.property('errors.salt');
					expect(resData).to.have.deep.property('errors.password');
				});
			});

			describe('Attempt to save with just an email value', function() {
				before(function(done) {
					user = new User({ email: 'bf@email.com' });
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

				it('Should not save with just a email property', function() {
					expect(resData).to.have.deep.property('errors.email');
					expect(resData).to.have.deep.property('errors.salt');
					expect(resData).to.have.deep.property('errors.password');
					console.log(resData);
				});
			});

			describe('Attempt to save with just a password value', function() {
				before(function(done) {
					user = new User({ password: 'topsecret' });
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

				it('Should not save with just a password property', function() {
					expect(resData).to.have.deep.property('errors.email');
					expect(resData).to.have.deep.property('errors.salt');
				});
			});

			describe('Attempt to save with an email already in use', function() {
				before(function(done) {
					user = new User({ name: 'Bill Finger the 2nd', email: 'bf@email.com', password: 'batman', salt: '1234' });
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

				it('Should not save with a duplicate email', function() {
					expect(resData).to.have.deep.property('errors.email');
				});
			});
		});
	});
});