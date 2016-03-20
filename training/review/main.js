// Returns an array with all integers from closed range starting with
// begin, ending with end.
function closedRange(begin, end) {
  var result = [];
  for (var i = begin; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// Returns an array with all integers from open range starting with
// begin, ending with end.
function openRange(begin, end) {
  return closedRange(begin + 1, end - 1);
}

function getSumOfNumbersFromClosedRange(begin, end) {
  return closedRange(begin, end).reduce(function (prev, curr) {
    return prev + curr;
  }, 0);
}

function getEvenNumbersFromClosedRange(begin, end) {
  return closedRange(begin, end).filter(function (item) {
    return item % 2 === 0;
  });
}

function getSumOfEvenNumbersFromRange(begin, end) {
  return getEvenNumbersFromClosedRange(begin, end).reduce(function (prev, next) {
    return prev + next;
  });
}


