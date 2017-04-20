import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import validate from './validator.js'
import user from './database/users.js'

const router = new Router();
const app = new Koa();

app.use(bodyParser());

router.post('/auth/register', function (ctx, next) {
    var validator = validate(ctx.request.body,['name','username','password'])

    if (validator.hasErrors) {
        ctx.body = {errors: validator.errors}
        return
    }

    ctx.body = {user: user.create(ctx.request.body)}
});

router.post('/auth/login', function (ctx, next) {
    var validator = validate(ctx.request.body,['username','password'])

    if (validator.hasErrors) {
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

router.get('/meals',function (ctx, next) {
    console.log('GET meals')
});
router.get('/meals/:id',function (ctx, next) {
    console.log('GET meal '+this.params.id)
});
router.post('/meals',function (ctx, next) {
    console.log('POST meal')
});
router.put('/meals',function (ctx, next) {
    console.log('UPDATE meal')
});
router.delete('/meals/:id',function (ctx, next) {
    console.log('DELETE meal '+this.params.id)
});


app.use(function (ctx, next) {
    var authHeader = ctx.request.get('Authorization')
    if (authHeader) ctx.state.user = user.findByToken(authHeader.split(" ")[1])
    next()
})

app.use(serve('build'));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

export default app
