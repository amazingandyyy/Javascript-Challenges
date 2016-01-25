 // Write a JavaScript function that takes one argument that is a sentence (multiple words) and returns a new sentence where all words are reversed but kept in the same order as the original sentence.
//Test Case
// wordsReverser("This is fun, hopefully.");
//Would return:
//"sihT si nuf, yllufepoh."

function wordsReverser(param) {

  var array = param.split(" ");

  var reverseArray = wordsArray.map(function(string) {

  var word = string.split("");

  var punctuation = word.pop(); //

  var reversedWord = word.reverse();

  reversedWord.push(punctuation);

  // return joined word

  return reversedWord.join("");

  }

}

console.log(wordsReverser("This is fun, hopefully."));
