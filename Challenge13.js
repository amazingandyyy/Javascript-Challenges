// Write a JavaScript function that takes a sentence as an argument and determines which word in that sentence has the greatest number of repeated letters (the repeated letters do not have to be consecutive).
//
// If the sentence has multiple words with the same max of repeated letters, return them all in an Array.
//
// Test Case
//
// Would select the words:
// wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale")
//
// ["attribute", "success"]

function wordSelector(sentence) {

  // 1) split sentence to array
  // How to: Use split or match Method
  // match method is more useful one line of code parssing token such as  ".", "–"
  var array = sentence.match(/[a-z]+/ig);

  for(var i=0; i < array.length; i++) {

    //["I","attribute","my","success","to"...]
    var arrayLetter = array[i];
    // Repeat letter counter
    repeatLetterCounter(arrayLetter);
  }
  // var mapped = array.map(function(el, i) {
  //   console.log("mapped: el " + el + "mapped: i " + i);
  //   // return {
  //   //   index: i, value: el.toLowerCase()
  //   // };
  // })

  // 2) to check
}

function repeatLetterCounter(arrayLetter) {

  for(var i=0; i<arrayLetter.length; i++) {

  }

}

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));
