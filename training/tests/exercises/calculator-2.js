var test = require('tape').test;

test('Calculator 2', function (t) {
  /**
   * Exercise 3
   *
   * Write a function which accepts 2 numeric-like arguments and returns their sum.
   * Otherwise return null.
   */
  function sum2(a, b) {
    // code here...
  }

  testEqual(sum2(10, 5), 15, 'Sum of numbers');
  testEqual(sum2(10, '5'), 15, 'Sum of number and number-like string');
  testEqual(sum2('10', '5'), 15, 'Sum of number-like strings');
  testEqual(sum2('Test', 1), null, 'Sum of text and number');
  testEqual(sum2(1, 'Test'), null, 'Sum of number and text');
  testEqual(sum2(function () {}, 'Test'), null, 'Sum of function and text');
});
