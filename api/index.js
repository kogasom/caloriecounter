import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import validate from './validator.js'
import user from './database/users.js'
import Meal from './database/meals.js'
import mealRoutes from './routes/meals.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'

const router = new Router();
const app = new Koa();

app.use(bodyParser());

router.get('/',serve('build'));

app.use(async function (ctx, next) {
    var authHeader = ctx.request.get('Authorization')
    if (authHeader) ctx.state.user = user.findByToken(authHeader.split(" ")[1])
    await next()
})

app.use(authRoutes.routes())
app.use(authRoutes.allowedMethods())

app.use(userRoutes.routes())
app.use(userRoutes.allowedMethods())

app.use(mealRoutes.routes());
app.use(mealRoutes.allowedMethods())

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

export default app
