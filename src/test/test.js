/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../app');

describe('Test 200 status code', () => {
  test('Testing status code in the / endpoint', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('Test get all data in json', () => {
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
});

describe('Test NotFound page', () => {
  test('Return Page Not Found', (done) => {
    request(app)
      .get('/400')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(404);
        return done();
      });
  });
});

describe('Test NotFound search Case', () => {
  test('Testing notfound if the user enter notfound keyword', (done) => {
    request(app)
      .post('/search')
      .send('fff')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({
          error: 403,
          message: 'Forbidden',
          reason: 'private',
        });
        return done();
      });
  });
});
