//Hard code a big array of 100+ source words in your javascript, and pick a word randomly from that.

$(document).ready(function() {
    $("#btnGuess").click(guessWord);
});

var words = [
  'Olympic',
  'MLB',
  'FIFA'
];

function gameStart(words) {
  // randomly pick of the words
  // Random function to use
  //
}

function guessWord() {

  // input word
    var letter = $("#guessLetter").val();
    console.log("letter: " + letter);

  // if match word

  // if doesn't match word

  // if match word count reached

  // if doens't match word count

}

// console.log(gameStart(words))

guessWord();
