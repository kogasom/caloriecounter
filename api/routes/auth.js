import Router from 'koa-router'
import validate from '../validator.js'
import user from '../database/users.js'

const router = new Router();

router.post('/auth/register', function (ctx, next) {
    var validator = validate(ctx.request.body,['name','username','password'])

    if (validator.hasErrors) {
        ctx.status = 422
        ctx.body = {errors: validator.errors}
        return
    }

    var usr = user.create(ctx.request.body)

    if (!usr) {
        ctx.status = 422
        ctx.body = {errors: {register: "username exists"}}
        return
    }

    ctx.body = {user: usr}
});

router.post('/auth/login', function (ctx, next) {
    var validator = validate(ctx.request.body,['username','password'])

    if (validator.hasErrors) {
        ctx.status = 422
        ctx.body = {errors: validator.errors}
        return
    }

    let usr = user.findByCredentials(ctx.request.body)
    if (!usr) {
        ctx.status = 401
        ctx.body = {
            errors: {
                auth: "Wrong credentials"
            }
        }
        return;
    }

    ctx.body = {user: usr}
});

export default router
