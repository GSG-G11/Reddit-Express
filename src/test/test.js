const request = require('supertest');

const app = require('../app');


test('Get all data in json', (done) => {
    request(app)
      .post('/search')
      .expect(200)
     .expect('Content-Type', /json/)
     .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  test('Return Page Not Found', (done) => {
    request(app)
      .get('/400')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(404);
        done();
      });
  });
