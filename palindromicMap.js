function palindromicMap(param) {

  // Use the .map function in your solution and don't use any loops.
  // split and remove punctuation and extra spaces
  // var array = str.match(/[a-z-]+/ig);
  var array = param.split(" ");
  // console.log("array:" + array);

  var returnArray = array.map(function(str) {
    return str === str.split("").reverse().join("");
  });

  return returnArray;

}
// palindromicMap("stash and pop on this level")
console.log(palindromicMap("stash and pop on this level"));