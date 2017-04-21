import Router from 'koa-router'
import Meal from '../database/meals.js'
import validate from '../validator.js'

const router = new Router();

router.use('/meals',function (ctx, next) {
    try {
        ctx.assert(ctx.state.user, 401, 'Unauthenticated')
    } catch (err) {
        ctx.status=401
        ctx.body = {error: 'Unauthenticated'}
        return
    }

    ctx.state.meal = new Meal(ctx.state.user.id)

    next()
});

router.get('/meals',function (ctx, next) {
    ctx.body = {
        meals: ctx.state.meal.all()
    }
});

router.get('/meals/:id',function (ctx, next) {
    ctx.body = {
        meals: ctx.state.meal.find(ctx.params.id)
    }
});

router.post('/meals',function (ctx, next) {
    var validator = validate(ctx.request.body,['date','time','text','calories'])

    if (validator.hasErrors) {
        ctx.status = 422
        ctx.body = {errors: validator.errors}
        return
    }

    ctx.body = {
        meals: ctx.state.meal.create(ctx.request.body)
    }
});
router.put('/meals',function (ctx, next) {
    var validator = validate(ctx.request.body,['id','date','time','text','calories'])

    if (validator.hasErrors) {
        ctx.status = 422
        ctx.body = {errors: validator.errors}
        return
    }

    ctx.body = {
        meals: ctx.state.meal.update(ctx.request.body)
    }
});
router.delete('/meals/:id',function (ctx, next) {
    
    ctx.body = {
        meals: {id: ctx.params.id},
        deleted: ctx.state.meal.remove(ctx.params.id)
    }
});

export default router
