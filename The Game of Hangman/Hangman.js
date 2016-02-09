//Hard code a big array of 100+ source words in your javascript, and pick a word randomly from that.

$(document).ready(function() {
    $("#btnGuess").click(guessWord);
});

var words = [
  'FIFA',
  'Olympic',
  'MLB'
];

function gameStart(words) {
  // randomly pick of the words
  // Random function to use
  //
}

function guessWord() {

  // input word
  var letter = $("#guessLetter").val();
  // if match word
  // for testing propose to choose words[0] word

  var word = words[0];
  for (var i=0; i < word.length; i++) {
    if ( letter === word.substring(i, i + 1) ) {
        console.log("letter2222: " + letter);
    }
  }

  // if doesn't match word

  // if match word count reached

  // if doens't match word count

}

// console.log(gameStart(words))

guessWord();
