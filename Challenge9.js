// Write a JavaScript function that takes one argument that is a sentence (multiple words) and returns a new sentence where all words are reversed but kept in the same order as the original sentence.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// ("This is fun, hopefully."); ==> "sihT si nuf, yllufepoh."

function wordsReverser(argument) {

  var argArray = argument.match(/[a-z.,]+/gi);

  var reverseArray = argArray.map(function(str) {

    var wordArray = str.split("");

    if (/[.,]+/g.test(wordArray.slice(str.length - 1))) {
      var dot = wordArray.pop(); //

      var reversedWord = wordArray.reverse();

      reversedWord.push(dot);
      return reversedWord.join("");
    } else {
      return wordArray.reverse().join("");
    }

  });

return reverseArray.join(" ");

}

console.log(wordsReverser("This is fun, hopefully."));
