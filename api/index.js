const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(serve('build'));
/*
app.use(ctx => {
      ctx.body = 'Hello World';
});
*/

app.listen(3000);

export default app
