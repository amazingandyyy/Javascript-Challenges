// Hard code a big array of 100+ source words in your javascript, and pick a word randomly from that.
// Use jQuery and Bootstrap, for everything
// Hard code a big array of 100+ source words in your javascript, and pick a word randomly from that.
// Take the input directly from the user keyboard, and report it (used characters so far, wrong ones, ..) Don't take any input from the mouse.
// If the user pressed a key for a character that has already been used, blink the screen
// Use a library to add some cool animation when you win/lose the game.

$(document).ready(function() {
  // gameStart(words);
  gameStart();
  $("#btnGuess").click(gameStagingOne);
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

var hangmanObj = "";
var wordHolder = "";
function gameStart() {
  // randomly pick of the hangmanObj and init set to "-"
  // hangmanObj = gameList[Math.floor(Math.random() * gameList.length + 1)];
  hangmanObj = gameList[0];

  for (var i=0; i < hangmanObj.name.length; i++) {
    wordHolder+= "-";
  }

  $("#answerWord").text(wordHolder);
  $("#hint").text(hangmanObj.hint);

  // Random function to useh
  //
}

var inCorrect = 5;
function gameStagingOne() {
  var correct = 0
  // input word
  var letter = $("#inputLetter").val();

  if($('#inputLetter').val() == ''){
     alert('Input can not be left blank');
     return;
  }

  var pattern = RegExp(letter, "gi");
  // if match word
  // for testing propose to choose hangmanObj[0] word

  // var correct = 0, inCorrect = 0;
  // var word = gameList[1].name;
  var hangmanName = hangmanObj.name;
  // inCorrect = word.length;

  for (var i=0; i < hangmanName.length; i++) {
    // if ( letter === word.substring(i, i + 1) ) {

    if (hangmanName.substring(i, i + 1).match(pattern) != null) {

      if ( hangmanName.substring(i, i + 1).match(pattern).length > 0 ) {
        correct++;
        // highlight matching letter
        wordHolder = wordHolder.substring(0, i) + letter + wordHolder.substring(i + 1, wordHolder.length + 1);
        $("#answerWord").text(wordHolder);
      }
    }
  }

  // if doesn't match word
  if (correct == 0) {
    inCorrect--;
    // pic roation in Hangman
  }

  // if match word count reached
  if (wordHolder.toLowerCase() === hangmanName.toLowerCase()) {
    // Hangman game win > 0
    $("#hangmanGameDone").text("Hangman game win");
  }

  // if doesn't match word count
  if (inCorrect == 0) {
    // Hangman game over
    $("#hangmanGameDone").text("Hangman game over");
  }

  console.log("wordHolder: " + wordHolder);

  $("#inputLetter").val("");

}

// console.log(gameStart(hangmanObj))
// gameStart(hangmanObj);
// guessWord();
