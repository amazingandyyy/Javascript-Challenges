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

  var correct = 0, inCorrect = 0;
  var word = words[0];
  inCorrect = word.length;

  for (var i=0; i < word.length; i++) {
    if ( letter === word.substring(i, i + 1) ) {

      correct++;
      // highlight matching letter

    }
  }

  // if doesn't match word
  if (correct == 0) {
    inCorrect--;
    // pic roation in Hangman
  }

  // if match word count reached
  if (correct === word.length) {
    // Hangman game win
  }

  // if doesn't match word count
  if (inCorrect == 0) {
    // Hangman game over
  }


}

// console.log(gameStart(words))

guessWord();
