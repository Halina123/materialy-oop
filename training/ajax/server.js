var app = require('koa')();
var router = require('koa-router')();
var chance = new (require('chance'))(100);

var users = [];
for (var i = 0; i < 100; i++) {
  users.push({
    name: chance.name(),
    age: chance.age({type: 'adult'}),
    country: chance.country({ full: true }),
    smokes: chance.bool({likehood: 10})
  });
}

router.get('/users', function *(next) {
  this.set('Content-Type', 'application/json');
  this.body = JSON.stringify({
    users: users
  }, null, 2);
});

var articles = [];
for (var j = 0; j < 100; j++) {
  articles.push({
    author: chance.name(),
    title: chance.sentence(),
    date: chance.date({string: true, american: false, year: 2015})
  });
}

router.get('/articles', function *(next) {
  this.set('Content-Type', 'application/json');
  this.body = JSON.stringify({
    articles: articles
  }, null, 2);
});

router.get('/sum-integers', function *(next) {
  var a = this.query.a;
  var b = this.query.b;
  this.set('Content-Type', 'application/json');
  this.body = JSON.stringify({
    sum: parseInt(a) + parseInt(b)
  }, null, 2);
});



app
  .use(function *corsFix(next) {
    this.set(
      'Access-Control-Allow-Origin',
      '*'
    );
    this.set(
      'Access-Control-Allow-Methods',
      [
        'GET',
        'OPTIONS',
        'HEAD',
        'PUT',
        'POST',
        'DELETE',
        'PATCH'
      ].join(',')
    );
    this.set(
      'Access-Control-Allow-Headers',
      [
        'origin',
        'x-http-method-override',
        'accept',
        'content-type',
        'authorization',
        'x-pingother'
      ].join(',')
    );
    yield next;
  })
  .use(function *log(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s ms', this.method, this.url, ms);
  })
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);

console.log('Server is running now...');
