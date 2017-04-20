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



app.use(serve('build'));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

export default app
