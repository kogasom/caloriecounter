import Router from 'koa-router'
import validate from '../validator.js'
import user from '../database/users.js'

const router = new Router();

router.post('/user', function (ctx, next) {
    try {
        ctx.assert(ctx.state.user, 401, 'Unauthenticated')
    } catch (err) {
        return
    }

    var validator = validate(ctx.request.body,['daily_calories'])

    if (validator.hasErrors) {
        ctx.body = {errors: validator.errors}
        return
    }

    var result = user.update(ctx.state.user.id, ctx.request.body)

    if (result) ctx.body = {user: result}
});

export default router
