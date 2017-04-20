import app from '../api/index.js'
import supertest from 'supertest'
import randomString from 'crypto-random-string'

const request = supertest.agent(app.listen())

describe('Server started', function () {
  it('should return HTTP 200', function (done) {
    request
      .get('/')
      .expect(200, done)
  })
})

describe('Registration', function () {
    it('should return response.errors when required fields are missing', function (done) {
        request
        .post('/auth/register')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no response.errors')
        })
        .end(done)
    })

    it('should return errors.name when name is missing', function (done) {
        request
        .post('/auth/register')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no response.errors')
            if (!res.body.errors.name) throw new Error('no errors.name in response')
        })
        .end(done)
    })

    it('should return errors.username when username is missing', function (done) {
        request
        .post('/auth/register')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no response.errors')
            if (!res.body.errors.username) throw new Error('no errors.username in response')
        })
        .end(done)
    })

    it('should return errors.password when password is missing', function (done) {
        request
        .post('/auth/register')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no response.errors')
            if (!res.body.errors.password) throw new Error('no errors.password in response')
        })
        .end(done)
    })

    it('should register a new user', function (done) {
        var user = {
            name: 'name_'+randomString(10),
            username: 'username_'+randomString(10),
            password: 'pass_'+randomString(10)
        }
        request
        .post('/auth/register')
        .send(user)
        .expect(function(res){
            if (!res.body.user) {
                console.log(res.body)
                throw new Error('no response.user')
            }
            if (res.body.user.name != user.name) throw new Error('wrong user.name')
            if (res.body.user.username != user.username) throw new Error('wrong user.username')
            if (res.body.user.password != user.password) throw new Error('wrong user.password')
        })
        .end(done)
    })
})

describe('Login', function () {
    it('should return response.errors when required fields are missing', function (done) {
        request
        .post('/auth/login')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no response.errors')
        })
        .end(done)
    })

    it('should return errors.username when username is missing', function (done) {
        request
        .post('/auth/login')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no response.errors')
            if (!res.body.errors.username) throw new Error('no errors.username in response')
        })
        .end(done)
    })

    it('should return errors.password when password is missing', function (done) {
        request
        .post('/auth/login')
        .expect(function(res){
            if (!res.body.errors) throw new Error('no response.errors')
            if (!res.body.errors.password) throw new Error('no errors.password in response')
        })
        .end(done)
    })
})
