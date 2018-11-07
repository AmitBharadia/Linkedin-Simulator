var chai=require('chai');
var expect=chai.expect;
var app=require('../app');
var request = require('supertest');


describe('POST / Signin api', function() {
    it('returns token if credentials are valid', function(done) {
        request(app)
           .post('/signin/')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ 	"user":{ email: 'vamshi.verama@gmail.com', password: 'password'} })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 
});

describe('GET / profile details api', function() {
    it('returns profile details if token is valid', function(done) {
        request(app)
           .get('/profile/details/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbXNoaS52ZXJhbWFAZ21haWwuY29tIiwidXNlcmlkIjoiNWJjZTgwYmVmM2I5NzMwOTYwNTU0MDZkIiwiaWF0IjoxNTQxNDAyNzkzLCJleHAiOjE1NDE0MDYzOTN9.CUE0GopJFqQRY0yYaus3CxduGfcidPCpRsTTtpMEXRQ')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 
});

describe('PUT property details api', function() {               

    it('updates property details if token is valid', function(done) {
        request(app)
           .put('/property/update/')
           .set('Accept', 'application/json')
           .field('Content-Type', 'multipart/form-data')
           .field('dates', '2018-11-12')
           .field('property_id',"5bd77496bf32042448124f79")
           .field('accommodates',2)
           .field('price',12)
           .field('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbXNoaS52ZXJhbWFAZ21haWwuY29tIiwidXNlcmlkIjoiNWJjZTgwYmVmM2I5NzMwOTYwNTU0MDZkIiwiaWF0IjoxNTQxNDAyNzkzLCJleHAiOjE1NDE0MDYzOTN9.CUE0GopJFqQRY0yYaus3CxduGfcidPCpRsTTtpMEXRQ")
           .field( "description","nice view")
           .field("bathrooms",1)
           .field("beds",2)
           .field("address","san jose")
           .field("city","san jose")
           .field("mobile","669")
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              // console.log(response.body);
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 
});

describe('delete property from homeaway', function() {
    it('deletes property if token is valid', function() {
        request(app)
           .delete('/property/')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbXNoaS52ZXJhbWFAZ21haWwuY29tIiwidXNlcmlkIjoiNWJjZTgwYmVmM2I5NzMwOTYwNTU0MDZkIiwiaWF0IjoxNTQxNDAyNzkzLCJleHAiOjE1NDE0MDYzOTN9.CUE0GopJFqQRY0yYaus3CxduGfcidPCpRsTTtpMEXRQ', property_id: "5bd77496bf32042448124f79" })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end();
    }); 
});