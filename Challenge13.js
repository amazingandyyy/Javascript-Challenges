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
  var array = sentence.split(" ");
  console.log("array[1]:" + array[1]);
  // 2) to check
}

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));
