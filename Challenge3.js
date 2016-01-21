//superCounter("Count me in");
//{"words": 3, "chars": 11, "avgLength": 3, "spaces": 2}
// var paramText = "Count me in";
// var superCounter = function(paramText) {
//
// var names = paramText.split(" ");
//
// var words = names.length;
// var chars = paramText.toString().length; // chars
// var spaces = names.length - 1;
// var avgLength = (chars - spaces) / words;
//
// return "words : " + words +  ", chars : " + chars + ", avgLength : " + avgLength + ", spaces: " + spaces  ;
// }
//
// console.log(superCounter(paramText));

//Well, that was not what I meant but glad to see you do understand objects. I meant instead of returning the string at the end of the function, have it return an object with all of those keys/values. Remove all quotations from your return value.

// var test = {
//     'type' : 'news',
//     'name' : 'article1'
// };
//
// function showObject(obj) {
//   var result = "";
//   for (var p in obj) {
//     if( obj.hasOwnProperty(p) ) {
//       result += p + " , " + obj[p] + "\n";
//     }
//   }
//   return result;
// }
//
// var Util = {
//   // Util.paramText = "Count me in";
//     superCounter : function(paramText) {
//
//     var names = paramText.split(" ");
//     var words = names.length;
//     var chars = paramText.toString().length; // chars
//     var spaces = names.length - 1;
//     var avgLength = (chars - spaces) / words;
//
//     return "words : " + words +  ", chars : " + chars + ", avgLength : " + avgLength + ", spaces: " + spaces  ;
//   }
//
// }
//
// console.log(Util.superCounter("Count me in"));



// except return object {"words": 3, "chars": 11, "avgLength": 3, "spaces": 2}
var superCounter = function(paramText) {

  var names = paramText.split(" ");
  var words = names.length;
  var spaces = names.length - 1;
  var chars = paramText.toString().length; // chars

  //object to return
  var counterObject = {
    'words': words,
    'chars': chars,
    'avgLength': (chars - spaces) / words,
    'spaces': spaces
  };

  return counterObject;

}; //end superCounter function

console.log(superCounter("Count me in"))
