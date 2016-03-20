var test = require('tape').test;
var utils = require('../src/utils');

test('generating range of numbers in array', function (t) {
  t.plan(1);

  t.equal(main.range(1).length, 1, 'Has proper length');
});


test('checking even numbers', function (t) {
  t.plan(2);

  t.equal(main.isEven(1), false, 'Has proper length');
  t.equal(main.isEven(2), true, 'Has proper length');
});

test('adding numbers', function (t) {
  t.plan(3);

  t.equal(main.add(2, 3), 5, 'Adding two numbers');
  t.equal(main.add(1, 3), 4, 'Adding two numbers');
  t.throws(function () {
    main.add('1', 3);
  }, /Expected numbers as arguments/);
});

// test('basic arithmetic', function (t) {
//   t.plan(3);

//   t.equal(2 + 3, 5, 'Sum opearation');
//   t.equal(7 * 8 + 9, 65, 'Order of operators');
//   t.equal(3 - 1, 2, 'Substraction');
// });

