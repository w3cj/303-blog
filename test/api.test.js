const request = require('supertest');
const { expect } = require('chai');

const app = require('../src/app');
const connection = require('../src/db/connection');
const examplePost = require('./fixtures/post');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏',
      }, done);
  });
});
describe('/api/v1/posts', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
    await connection.seed.run();
  });

  describe('POST /api/v1/posts', () => {
    it('responds with a json message', (done) => {
      request(app)
        .post('/api/v1/posts')
        .set('Accept', 'application/json')
        .send(examplePost)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(({ body }) => {
          examplePost.id = body.id;
          expect(body).to.deep.equal(examplePost);
          done();
        });
    });
    it('responds with an error if missing all properties', (done) => {
      request(app)
        .post('/api/v1/posts')
        .set('Accept', 'application/json')
        .send({})
        .expect('Content-Type', /json/)
        .expect(500)
        .then(({ body }) => {
          expect(body.message).to.equal('title: is a required property, author: is a required property, content: is a required property');
          done();
        });
    });
    it('responds with an error if missing title', (done) => {
      request(app)
        .post('/api/v1/posts')
        .set('Accept', 'application/json')
        .send({
          author: 'CJ',
          content: 'Hire me.',
        })
        .expect('Content-Type', /json/)
        .expect(500)
        .then(({ body }) => {  
          expect(body.message).to.equal('title: is a required property');
          done();
        });
    });
  });

  describe('GET /api/v1/posts/:id', () => {
    it('responds with a json message', (done) => {
      request(app)
        .get('/api/v1/posts/6')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(({ body }) => {
          expect(body.id).to.equal(6);
          done();
        });
    });
    it('responds with a not found message', (done) => {
      request(app)
        .get('/api/v1/posts/10')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404)
        .then(({ body }) => {
          expect(body.message).to.equal('Post not found');
          done();
        });
    });
  });
});
