var test = require('tape').test;

test('Concat 1', function (t) {
  /**
   * Concat 1
   *
   * Write a function which returns a result of concatenation of 2 strings.
   * For elements of different type simply return null.
   */
  function concat(a, b) {
    // code here...
  }

  t.equal(concat('abc', 'def'), 'abcdef', 'Concat of strings');
  t.equal(concat('abc', 1), null, 'Concat of strings');
});
