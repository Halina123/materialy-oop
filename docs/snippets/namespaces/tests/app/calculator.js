QUnit.config.testTimeout = 10000;

QUnit.test('Calculator test', function( assert ) {
  var given = app.calculator.add(2,3);
  var expected = 5;
  assert.ok(given === expected, "Passed!" );
});

QUnit.test('Calculator test with incorrect data', function( assert ) {
  assert.throws(
    function () {
      app.calculator.add('2','3');
    },
    /number!/
  );
});

QUnit.test('Async add', function (assert) {
  assert.expect(1);

  var done = assert.async();
  app.calculator.asyncAdd(2,3, function (result) {
    assert.ok(result === 5, "Passed async!");
    done();
  });
});
