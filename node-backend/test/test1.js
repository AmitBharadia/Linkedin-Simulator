var chai = require('chai');
var expect = chai.expect;
var app = require('../app');
var request = require('supertest');

describe('GET / profile details api', function () {
    it('returns profile details if token is valid', function (done) {
        request(app)
            .get('/profile/getprofile')
            .query({ id: "5bff7baf4f968e493871e121" })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                expect(response.body).not.to.be.empty;
                expect(response.body).to.be.an('object');
            })
            .end(done);
    });
});


describe('PUT profile details api', function () {

    it('updates profile details if token is valid', function (done) {
        request(app)
            .put('/profile/updateprofile/')
            .set('Accept', 'application/json')
            .field('Content-Type', 'multipart/form-data')
            .field('firstName', 'vamshi reddy')
            .field('id', "5bff7baf4f968e493871e121")
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                // console.log(response.body);
                expect(response.body).not.to.be.empty;
                expect(response.body).to.be.an('object');
            })
            .end(done);
    });
});

describe('delete user from linkedin', function () {
    it('deletes user if token is valid', function () {
        request(app)
            .post('/deleteProfile')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send({ "id": '5c059df33701af30102574a2' })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                expect(response.body).not.to.be.empty;
                expect(response.body).to.be.an('object');
            })
            .end();
    });
});