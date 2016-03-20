var test = require('tape').test;

test('attributes', function (t) {
  var person = {
    // code here...
  };


  t.assert(person.name === 'bob', 'name should equal "bob"');
  t.assert(person.gender === 'male', 'gender should equal "male"');
  t.assert(person.weight === 100, 'weight should equal 100');
});
