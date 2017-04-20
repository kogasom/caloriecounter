import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import validate from './validator.js'

const router = new Router();
const app = new Koa();

app.use(bodyParser());

router.post('/auth/register', function (ctx, next) {
    var validator = validate(ctx.request.body,['username','password'])

    if (validator.hasErrors) ctx.body = {errors: validator.errors}
});

app.use(serve('build'));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

export default app
