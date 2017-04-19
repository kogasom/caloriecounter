import app from '../api/index.js'
import supertest from 'supertest'

const request = supertest.agent(app.listen())

describe('Server started', function () {
  it('should return HTTP 200', function (done) {
    request
      .get('/')
      .expect(200, done)
  })
})
