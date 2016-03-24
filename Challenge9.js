// Write a JavaScript function that takes one argument that is a sentence (multiple words) and returns a new sentence where all words are reversed but kept in the same order as the original sentence.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/str/split

// ("This is fun, hopefully."); ==> "sihT si nuf, yllufepoh."

function wordsReverser(argument) {

  var array = argument.match(/[a-z.]+/gi);
  // console.log("array:" + array);

  var resultArray = array.map(function(str) {

    var word = str.split("");
    // console.log("word:" + word);

    // if character array includes punctuation characters at last index
    if (/[.,?!]+/g.test(word.slice(str.length -1))) {
      // pop off punctuation mark and store it
      var punctuation = word.pop(); //
      console.log("punctuation:" + punctuation);

      // reverse remaining characters
      var reversedWord = word.reverse();
      console.log("reversedWord:" + reversedWord);

      // push punctuation onto the end of reversed characters array
      reversedWord.push(punctuation);
      // return joined word
      return reversedWord.join("");
    } else {
      return word.reverse().join("");
    }

  });

// return str of resultArray joined by spaces
return resultArray.join(" ");

}

console.log(wordsReverser("This is fun, hopefully."));
