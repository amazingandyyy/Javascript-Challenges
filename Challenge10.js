// Challenge10.js
// Write a javascript function that takes multiple arguments that are all integers and calculates the following:
//
// Count of odd integers
// Count of negative integers
// The average of all integers (round to 2 decimal)
// The median of all integers
// The function should return these values in an object.
//
// Test case  arrayAnalyzer(7, -3, 0, 12, 44, -5, 3);
// median -5, -3, 0, 3, 7, 12, 44
// would return: { "odds": 4, "negatives": 2, "avg": 8.29, "median": 3 }

function arrayAnalyzer(args) {

  // console.log("args:" + args);

  // console.log("arguments length:" + arguments.length);

  // ref url: http://bonsaiden.github.io/JavaScript-Garden/ko/#core.eval
  // arguments is special varliable which is also have length but not "array"
  // There are no standard push, pop, slice method
  // arguments convert to array prototype -> slice -> call
  // but it might have performance issue
  var argumentArray = Array.prototype.slice.call(arguments);

  var filteredArray = argumentArray.filter(function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  });

  function oddCounter() {

    var oddNums = 0; // counter

    for (var i = 0; i < filteredArray.length; i++) {

      if (filteredArray[i] % 2 !== 0)
         oddNums++;
    }
    return oddNums;
  }

  function negCounter() {

    var negNumbers = 0; //counter

    for (var i = 0; i < filteredArray.length; i++) {

      if (filteredArray[i] < 0)
        negNumbers++;
    }
    return negNumbers;
  }

  function averager() {

    var reducedArray = filteredArray.reduce(function(a,b) {
      return a+b;
    });

    return Number((reducedArray / filteredArray.length).toFixed(2));
  }

  function medianFinder() {

    var sortedArray = filteredArray.sort(function(a, b) {
      return a-b;
    });

    if (sortedArray.length % 2 === 0) {

      return Number((((sortedArray[(sortedArray.length / 2) - 1]) + (sortedArray[(sortedArray.length / 2)])) / 2).toFixed(2));
    }
    else
      return sortedArray[(sortedArray.length - 1) / 2];
  }

  var returnObject = {
    "odds": oddCounter(),
    "negatives": negCounter(),
    "avg": averager(),
    "median": medianFinder()
  };


  return returnObject;
}

// console.log(arrayAnalyzer(7, -3, 0, 12, 44, -5, 3, "string"));
console.log(arrayAnalyzer(7, -3, 0, 12, 44, -5, 3));
