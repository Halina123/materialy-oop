ns('app.calculator', function () {

  function num(x) {
    if (typeof x === 'number') {
      return x;
    } else {
      throw TypeError('Expected number!');
    }
  }

  return {
    add: function (a, b) {
      a = num(a);
      b = num(b);
      return num(a + b);
    },
    asyncAdd: function (a, b, callback) {
      setTimeout(function () {
        callback(a + b);
      }, 800);
    }
  };
});
