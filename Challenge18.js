// 18. Loops and Iterators

// Use a variety of different solutions to find the largest number in an array. Use a while loop, a do..while loop, a for loop, and a forEach loop. Use the following array for each of these loops:
// [2, 7, 4, 8, 6, 4]

function findLargestNumber(array) {

  // While Loops
  var largestNumber = 0;
  var i = 0;
  while (array[i]) {

    if (largestNumber < array[i])
      largestNumber = array[i];
      i++;
  }
  console.log("while loop largestNumber: " + largestNumber);

  // Do while Loops
  largestNumber = 0;  // Reset the largestNumber to 0
  i = 0;              // Reset condition i = 0
  do {
    if (largestNumber < array[i])
      largestNumber = array[i];

    i++;
  }
  while ( i < array.length )
  console.log("Do while loop largestNumber: " + largestNumber);



  largestNumber = 0;  // Reset the largestNumber to 0
  // For loops
  for (var i=0; i<array.length; i++) {

    if (array[i] > largestNumber)
      largestNumber = array[i];
  }
  console.log("for loop largestNumber: " + largestNumber);

  // var sortReturn =
  //
  // array.sort(function (a, b) {
  //       return (a < b);
  // })
  //
  // console.log(sortReturn);
  //
  // console.log(array[0]);
}

var array = [2, 7, 4, 8, 6, 4];
findLargestNumber(array);


// Using a for...in loop, console.log all of the keys and values in the following object:
// { "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] }

// Using the .map function return an array that is equal to the squares each of the values in the following array:
// [1, 2, 5, 7, 11]

// Using the .reduce function find the product of the numbers in the following array:
// [3, 5, 7, 9, 12]

// Using the .filter function create a new array of only odd numbers from the following array:
// [1, 22, 35, 2, 4, 7, 9]

// Using the .sort function, sort the following array reverse-alphabetically:
// ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee']
