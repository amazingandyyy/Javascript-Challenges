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

var Util = {

// Util.paramText = "Count me in";
superCounter : function(paramText) {
  var names = paramText.split(" ");

  var words = names.length;
  var chars = paramText.toString().length; // chars
  var spaces = names.length - 1;
  var avgLength = (chars - spaces) / words;

  return "words : " + words +  ", chars : " + chars + ", avgLength : " + avgLength + ", spaces: " + spaces  ;
}

}

console.log(Util.superCounter("Count me in"));
