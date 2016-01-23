function palindromicMap(param) {

  // if str in not a string, return error message
  if (typeof param !== "string") {
    return "palindromeMap() requires a string as input";
  }

  // Use the .map function in your solution and don't use any loops.
  // split and remove punctuation and extra spaces
  // var array = str.match(/[a-z-]+/ig);
  var array = param.split(" ");
  // console.log("array:" + array);

  // map whether each word in array is palindrome or not
  var returnArray = array.map(function(str) {
    return str === str.split("").reverse().join(""); // check for palindrome
  });

  return returnArray;

}
// palindromicMap("stash and pop on this level")
console.log(palindromicMap("stash and pop on this level"));

// array.map(function(str) { console.log(str.split("").reverse().join("")); });
