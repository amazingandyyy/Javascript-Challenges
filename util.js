
//superCounter("Count me in");
//{"words": 3, "chars": 11, "avgLength": 3, "spaces": 2}

var Util = {};
Util.words = function() {

}

var paramText = "Count me in";
var superCounter = function(paramText) {

// split make an array
var names = paramText.split(" ");

var words = names.length;
var chars = paramText.toString().length; // chars
var avgLength = parseInt(chars / words);
var spaces = names.length - 1;

return "words : " + words +  ", chars : " + chars + ", avgLength : " + avgLength + ", spaces: " + spaces  ;
}

console.log(superCounter(paramText));

/////////////////////////////////////////////////
var superCounter = function(str){
  //code here
  wordCounter = function ()
  {

  }
 //object to return
 var counterObject = {
    words: wordCounter,
    // chars: charCounter,
    // spaces: spaceCounter,
    // avgLength: wordAvgLength
  };


  return counterObject;

}; //end superCounter function

console.log(superCounter("Count me in"));

// function nameChanger(oldName) {
//     var finalName = oldName;
//     var names = oldName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join(" ");
//     return finalName;
// }
//
// var name = "Count to me";
// console.log(nameChanger(name));


var Util = {};

Util.superPrintX = function() {
  for (var i=0; i< argument.length; i++) {
    consoloe.log(argument[i]);
  }
}

Util.superPrintX("a", 2, "c", [4, 5, 6]);

var A = function () { };
A.x=function() {
    console.log('hello');
};
A.prototype.x = function () {
     console.log('world');
};
