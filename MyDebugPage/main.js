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
