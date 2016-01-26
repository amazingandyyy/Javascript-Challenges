// Write a JavaScript function that takes one argument that is a sentence (multiple words) and returns a new sentence where all words are reversed but kept in the same order as the original sentence.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

function wordsReverser(str) {

  var wordsArray = str.match(/[a-z.,-\/#!$%\^&\*;:{}=\_`~()1-90]+/gi);
  var reverseArray = wordsArray.map(function(string) {

    var word = string.split("");

    // if character array includes punctuation characters at last index
    if (/[.,?!]+/g.test(word.slice(string.length -1))) {
      // pop off punctuation mark and store it
      var punctuation = word.pop(); //

      // reverse remaining characters
      var reversedWord = word.reverse();

      // push punctuation onto the end of reversed characters array
      reversedWord.push(punctuation);
      // return joined word
      return reversedWord.join("");
    } else {
      return word.reverse().join("");
    }

  });

// return string of reverseArray joined by spaces
return reverseArray.join(" ");

}

console.log(wordsReverser("This is fun, hopefully."));
