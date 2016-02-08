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
  largestNumber = 0;
  i = 0;
  do {
    if (largestNumber < array[i])
      largestNumber = array[i];

    i++;
  }
  while ( i < array.length )
  console.log("Do while loop largestNumber: " + largestNumber);

  largestNumber = 0;
  // For loops
  for (var i=0; i<array.length; i++) {

    if (array[i] > largestNumber)
      largestNumber = array[i];
  }
  console.log("for loop largestNumber: " + largestNumber);

  largestNumber = 0;
  // For Each
  array.forEach(function(num) {
    if (num > largestNumber)
      largestNumber = num;
  } )
  console.log("forEach loop largestNumber: " + largestNumber);

}

var array = [2, 7, 4, 8, 6, 4];
findLargestNumber(array);

// Using a for...in loop, console.log all of the keys and values in the following object:
// { "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] }

function keyValueObject(car) {

  // for loop
  for(var key in car) {
    console.log("key : " +  key);
    console.log("value : " +  car[key]);
  }
}

var car = {
  "wheels": 3,
  "horsepower": 600,
  "decal": "flames",
  "awesome": true ,
  "holdsBarred": []
}

keyValueObject(car);

// Using the .map function return an array that is equal to the squares each of the values in the following array:
// [1, 2, 5, 7, 11]

function squaresMap(arraySquares) {

  var squares;
  squares = (
    arraySquares.map(function(num) {
      return (num * num);
    })
  )

  return squares;
}

var arraySquares = [1, 2, 5, 7, 11];
console.log(squaresMap(arraySquares));

// Using the .reduce function find the product of the numbers in the following array:
// [3, 5, 7, 9, 12]

function productReduce(arrayProduct) {

    var product;
    product = (
      arrayProduct.reduce(function(prev, next) {
        return (prev * next);
    })
  )

  return product;
}

var arrayProduct = [3, 5, 7, 9, 12];
productReduce(arrayProduct);

// Using the .filter function create a new array of only odd numbers from the following array:
// [1, 22, 35, 2, 4, 7, 9]

function oddNumberFilter(arrayNumbers) {

  var oddNumberArray = [];
  arrayNumbers.filter(function(num) {

      if (num % 2 !== 0) {
        oddNumberArray.push(num);
      }
  })

  return oddNumberArray;
}

var arrayNumbers = [1, 22, 35, 2, 4, 7, 9];
oddNumberFilter(arrayNumbers);

// Using the .sort function, sort the following array reverse-alphabetically:
// ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee']

function utilityFunction(arrayWords) {
  return arrayWords.sort().reverse();
}

var arrayWords = ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee'];
console.log(utilityFunction(arrayWords));
