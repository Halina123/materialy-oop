var test = require('tape').test;

test('Calculator 1', function (t) {
  /**
   * Calculator 1
   *
   * Write a function which accepts 2 numeric arguments and returns their sum.
   * If any of given arguments will be of different type - log an error to the console and
   * return null.
   */
  function sum(a, b) {
    // code here...
  }

  t.equal(sum(10, 5), 15, 'Sum of numbers');
  t.equal(sum('Test', 1), null, 'Sum of text and number');
  t.equal(sum(1, 'Test'), null, 'Sum of number and text');
  t.equal(sum(function () {}, 'Test'), null, 'Sum of function and text');
});
/**
 * Example usage of prototypes
 */
(function () {

  // Create noop Dog constructor
  var Dog = function () {
  };

  // Add bark method to the Dog prototype
  Dog.prototype.bark = function () {
    log('bark!');
  };

  // Create first instance of a Dog
  var dogInstance = new Dog();

  // Call bark method of a Dog instance
  dogInstance.bark(); // bark!

  // Check the type of eat method - if undefined then it simply
  // does not exist.
  log(typeof dogInstance.eat); // undefined

  // Improve the bark function - more 'r' is better ;)
  Dog.prototype.bark = function () {
    log('barrrrrrk!');
  };

  // Implement eat function which was undefined before
  Dog.prototype.eat = function () {
    log('omnomnom!');
  };

  // Call bark method of Dog instance
  dogInstance.bark(); // barrrrrrk!

  // Check type of Dog instance eat method - we've defined it already
  log(typeof dogInstance.eat); // 'function'

  // Example of checking if a given object attribute is callable
  if (typeof dogInstance.eat === 'function') {
    // Call callable eat attribute (a Dog instance method)
    dogInstance.eat();
  }
}()); // Add () here to make it run

///**
// * Example usage of regular expressions
// */
//(function () {
//  //debugger;
//
//  var examineRegexp = function (regexp, text) {
//    var m;
//    while ((m = regexp.exec(text)) !== null) {
//      if (m.index === regexp.lastIndex) {
//        break;
//      }
//      log(regexp.lastIndex);
//      log(m);
//      // View your result using the m-variable.
//      // eg m[0] etc.
//    }
//  };
//
//  var testSamples = [
//    //{
//    //  regexp: /\d{2}-\d{3}/,
//    //  text: 'Kod pocztowy 81-255 '
//    //},
//
//    {
//      regexp: /ABC/,
//      text: 'ABCDEFabc'
//    },
//
//    {
//      regexp: /a{2,4}/g,
//      text: 'ABCaDDaaaGaWaaaaaa'
//    },
//
//    {
//      regexp: /abc/ig,
//      text: 'ABCabc'
//    }
//  ].forEach(
//    function (sample) {
//      examineRegexp(sample.regexp, sample.text);
//    }
//  );
//}()); // Add () here to make it run
