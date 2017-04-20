import Router from 'koa-router'
import Meal from '../database/meals.js'

const router = new Router();

router.use('/meals',function (ctx, next) {
    try {
        ctx.assert(ctx.state.user, 401, 'Unauthenticated')
    } catch (err) {
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
    next()
});
router.get('/meals/:id',function (ctx, next) {
    console.log('GET meal '+ctx.params.id)
    ctx.body = {
        meals: ctx.state.meal.find(ctx.params.id)
    }
    return

});
router.post('/meals',function (ctx, next) {
    console.log('POST meal')
});
router.put('/meals/:id',function (ctx, next) {
    console.log('UPDATE meal')
});
router.delete('/meals/:id',function (ctx, next) {
    console.log('DELETE meal '+ctx.params.id)
});

export default router
