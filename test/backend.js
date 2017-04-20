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

describe('Registration', function () {
    it('should return {errors} when username or password is missing', function (done) {
        request
        .post('/auth/register')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no {errors} in response')
        })
        .end(done)
    })

    it('should return errors.username when username is missing', function (done) {
        request
        .post('/auth/register')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no {errors} in response')
            if (!res.body.errors.username) throw new Error('no errors.username in response')
        })
        .end(done)
    })

    it('should return errors.password when password is missing', function (done) {
        request
        .post('/auth/register')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no {errors} in response')
            if (!res.body.errors.password) throw new Error('no errors.password in response')
        })
        .end(done)
    })
})
