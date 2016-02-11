// Hard code a big array of 100+ source words in your javascript, and pick a word randomly from that.
// Use jQuery and Bootstrap, for everything
// Hard code a big array of 100+ source words in your javascript, and pick a word randomly from that.
// Take the input directly from the user keyboard, and report it (used characters so far, wrong ones, ..) Don't take any input from the mouse.
// If the user pressed a key for a character that has already been used, blink the screen
// Use a library to add some cool animation when you win/lose the game.

$(document).ready(function() {
  // gameStart(words);
  gameStart(gameList[0].name);
  $("#btnGuess").click(guessWord);
});

var gameList = [
    { name: 'FIFA', hint: 'Soccer or Football' },
    { name: 'MLB', hint: 'Baseball' }
];

// var words = [
//   'FIFA',
//   'Olympic',
//   'MLB'
// ];

var wordHolder = "";
function gameStart(words) {
  // randomly pick of the words and init set to "-"
  for (var i=0; i < words.length; i++) {
    wordHolder+= "-";
  }

  $("#guessWord").text(wordHolder);

  // Random function to use
  //
}

var correct = 0, inCorrect = 0;
function guessWord() {

  // input word
  var letter = $("#guessLetter").val();
  var pattern = RegExp(letter, "gi");
  // if match word
  // for testing propose to choose words[0] word

  // var correct = 0, inCorrect = 0;
  var word = gameList[0].name;
  inCorrect = word.length;

  for (var i=0; i < word.length; i++) {
    // if ( letter === word.substring(i, i + 1) ) {

    if (word.substring(i, i + 1).match(pattern) != null) {

      if ( word.substring(i, i + 1).match(pattern).length > 0 ) {
        correct++;
        // highlight matching letter
        wordHolder = wordHolder.substring(0, i) + letter + wordHolder.substring(i + 1, wordHolder.length + 1);
        $("#guessWord").text(wordHolder);
      }
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
    $("#hangmanGameDone").text("Hangman game win");
  }

  // if doesn't match word count
  if (inCorrect == 0) {
    // Hangman game over
    $("#hangmanGameDone").text("Hangman game over");
  }

  console.log("wordHolder: " + wordHolder);

  $("#guessLetter").val("");

}

// console.log(gameStart(words))
// gameStart(words);
// guessWord();
