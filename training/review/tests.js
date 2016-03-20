QUnit.test('closedRange', function( assert ) {
  var f = closedRange;
  assert.deepEqual(f(1, 5), [1, 2, 3, 4, 5]);
  assert.deepEqual(f(-1, 1), [-1, 0, 1]);
  assert.deepEqual(f(0, 0), [0]);
});

QUnit.test('openRange', function( assert ) {
  var f = openRange;
  assert.deepEqual(f(1, 5), [2, 3, 4]);
  assert.deepEqual(f(-1, 1), [0]);
  assert.deepEqual(f(0, 0), []);
});

QUnit.test('sumOfNumbersFromClosedRange', function( assert ) {
  var f = getSumOfNumbersFromClosedRange;
  assert.deepEqual(f(1, 5), 15);
  assert.deepEqual(f(-1, 1), 0);
  assert.deepEqual(f(-2, 1), -2);
  assert.deepEqual(f(0, 0), 0);
});

QUnit.test('getEvenNumbersFromClosedRange', function( assert ) {
  var f = getEvenNumbersFromClosedRange;
  assert.deepEqual(f(1, 5), [2, 4]);
  assert.deepEqual(f(-1, 1), [0]);
  assert.deepEqual(f(-2, 1), [-2, 0]);
  assert.deepEqual(f(0, 0), [0]);
});

QUnit.test('getSumOfEvenNumbersFromRange', function( assert ) {
  var f = getSumOfEvenNumbersFromRange;
  assert.deepEqual(f(1, 5), 6);
  assert.deepEqual(f(-1, 1), 0);
  assert.deepEqual(f(-2, 1), -2);
  assert.deepEqual(f(0, 0), 0);
});



