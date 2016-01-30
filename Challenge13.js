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
  // var array = sentence.split(" ");
  var array = sentence.match(/[a-z]+/ig);

  //array.sort();
  console.log("array:" + array);
  // console.log("array.sort():" + array.sort());

  // var arraySort = [];
  for(var i=0; i < array.length; i++) {

    for(var j=0; j < array[j].length; j++) {
      console.log("array[j]: " + array[j].charAt(j));
    }

  }

  // var mapped = array.map(function(el, i) {
  //   console.log("mapped: el " + el + "mapped: i " + i);
  //   // return {
  //   //   index: i, value: el.toLowerCase()
  //   // };
  // })

  // 2) to check
}

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));
