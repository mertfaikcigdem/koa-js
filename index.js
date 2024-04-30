const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use(ctx => {
  ctx.status = 200;
  ctx.accepts = "html";
  switch (ctx.url) {
      case "/":
          ctx.body = "<h1>Index Sayfasına Hoşgeldiniz</h1>";
          break;
      case "/about":
          ctx.body = "<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>";
          break;
      case "/contact":
          ctx.body = "<h1>İletişim Sayfasına Hoşgeldiniz</h1>";
          break;
      default:
          ctx.status = 404;
          ctx.body = "<h1>404 Sayfa Bulunamadı</h1>";
          break;
  }
});

app.listen(port, () => {
  console.log(`Ready on localhost:${port}`);
});
