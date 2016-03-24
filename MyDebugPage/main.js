Skip to content
This repository
Search
Pull requests
Issues
Gist
 @march-dave
 Unwatch 1
  Star 0
  Fork 0 march-dave/Javascript-Challenges
 Code  Issues 0  Pull requests 0  Wiki  Pulse  Graphs  Settings
Branch: master Find file Copy pathJavascript-Challenges/Challenge10.js
c7786f8  19 days ago
@march-dave march-dave modified: Challenge10.js
1 contributor
RawBlameHistory     112 lines (84 sloc)  3.2 KB
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
  // but it might have have performance issue
  var argumentArray = Array.prototype.slice.call(arguments);

  // filter out non-numbers
  var filteredArray = argumentArray.filter(function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  });

  // odd number counter helper function
  function oddCounter() {

    var oddNums = 0; // counter

    // for each number in the filtered array
    for (var i = 0; i < filteredArray.length; i++) {

      //if number modulus 2 is not zero then increment oddNum counter
      if (filteredArray[i] % 2 !== 0)
         oddNums++;
    }
    return oddNums;
  }

  // negative number counter helper function
  function negCounter() {

    var negNumbers = 0; //counter

    // for each number in filtered array
    for (var i = 0; i < filteredArray.length; i++) {

      // increment counter if less than 0
      if (filteredArray[i] < 0)
        negNumbers++;
    }
    return negNumbers;
  }

  // averager helper function
  function averager() {

    // reduce to sum of all numbers
    var reducedArray = filteredArray.reduce(function(a,b) {
      return a+b;
    });

    // return sum divided by filteredArray length, rounded to the second decimal place, as a number data type
    return Number((reducedArray / filteredArray.length).toFixed(2));
  }

  // median/mean helper function
  function medianFinder() {

    //sort from lowest to highest
    var sortedArray = filteredArray.sort(function(a, b) {
      return a-b;
    });

    // if the array length is even
    if (sortedArray.length % 2 === 0) {

      // return the number data type of the sum of the two middle indexes divided by 2 (the mean), rounded to the second decimal place
      return Number((((sortedArray[(sortedArray.length / 2) - 1]) + (sortedArray[(sortedArray.length / 2)])) / 2).toFixed(2));
    }

    // if the array length is odd
    else
      // return the middle index (median)
      return sortedArray[(sortedArray.length - 1) / 2];
  }

  // End Helper Functions /////////////////////////////////////


  // create return object and use helper functions to determine values
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
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help

// function wordsReverser(argument) {

//   var argArray = argument.match(/[a-z.,]+/gi);

//   var reverseArray = argArray.map(function(str) {

//     var wordArray = str.split("");

//     if (/[.,]+/g.test(wordArray.slice(str.length - 1))) {
//       var dot = wordArray.pop(); //

//       var reversedWord = wordArray.reverse();

//       reversedWord.push(dot);
//       return reversedWord.join("");
//     } else {
//       return wordArray.reverse().join("");
//     }

//   });

// return reverseArray.join(" ");

// }

// console.log(wordsReverser("This is fun, hopefully."));
