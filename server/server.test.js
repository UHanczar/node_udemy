const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('express', () => {

  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Hello, world!'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Uladzimir',
            age: 32
          });
        })
        .end(done);
    });
  });
});
