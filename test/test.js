var request = require('supertest');
var app = require('../app.js');

describe('GET', function() {
  it('respond with text/html', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('respond with George Orwell', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect(/George Orwell/, done);
  });

  it('/api responds with json', function(done) {
    request(app)
      .get('/api')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('/api responds with animals object', function(done) {
    request(app)
      .get('/api')
      .expect(200)
      .expect(function(res) {
        if (!('lion' in res.body)) throw new Error("missing lion");
        if (!('cow' in res.body)) throw new Error("missing cow");
      })
      .end(done);
  });
});
