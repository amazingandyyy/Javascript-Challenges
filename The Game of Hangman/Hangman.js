// Hard code a big array of 100+ source words in your javascript, and pick a word randomly from that.
// Use jQuery and Bootstrap, for everything
// Hard code a big array of 100+ source words in your javascript, and pick a word randomly from that.
// Take the input directly from the user keyboard, and report it (used characters so far, wrong ones, ..) Don't take any input from the mouse.
// If the user pressed a key for a character that has already been used, blink the screen
// Use a library to add some cool animation when you win/lose the game.

$(document).ready(function() {
  // gameStart(words);
  gameStart();
  // $("#btnGuess").click(gameStagingOne);
  $("#inputLetter").keyup(gameStagingOne);
});

var alphabetArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
];

var gameList = [
  { name: 'FIFA', hint: 'Soccer or Football' },
  { name: 'MLB', hint: 'Baseball' },
  { name: 'Afghanistan', hint: 'Country' },
  { name: 'Albania', hint: 'Country' },
  { name: 'Algeria', hint: 'Country' },
  { name: 'Andorra', hint: 'Country' },
  { name: 'Angola', hint: 'Country' },
  { name: 'Argentina', hint: 'Country' },
  { name: 'Armenia', hint: 'Country' },
  { name: 'Aruba', hint: 'Country' },
  { name: 'Australia', hint: 'Country' },
  { name: 'Austria', hint: 'Country' },
  { name: 'Azerbaijan', hint: 'Country' },

  { name: 'Bahamas', hint: 'Country' },
  { name: 'Bahrain', hint: 'Country' },
  { name: 'Bangladesh', hint: 'Country' },
  { name: 'Barbados', hint: 'Country' },
  { name: 'Belarus', hint: 'Country' },
  { name: 'Belgium', hint: 'Country' },
  { name: 'Belize', hint: 'Country' },
  { name: 'Benin', hint: 'Country' },
  { name: 'Bhutan', hint: 'Country' },
  { name: 'Bolivia', hint: 'Country' },
  { name: 'Botswana', hint: 'Country' },
  { name: 'Brazil', hint: 'Country' },
  { name: 'Brunei', hint: 'Country' },
  { name: 'Bulgaria', hint: 'Country' },
  { name: 'Burma', hint: 'Country' },
  { name: 'Burundi', hint: 'Country' },

  { name: 'Cambodia', hint: 'Country' },
  { name: 'Cameroon', hint: 'Country' },
  { name: 'Canada', hint: 'Country' },
  { name: 'Cape Verde', hint: 'Country' },
  { name: 'Chad', hint: 'Country' },
  { name: 'Chile', hint: 'Country' },
  { name: 'China', hint: 'Country' },
  { name: 'Colombia', hint: 'Country' },
  { name: 'Comoros', hint: 'Country' },
  { name: 'Congo', hint: 'Country' },
  { name: 'Costa Rica', hint: 'Country' },
  { name: 'Croatia', hint: 'Country' },
  { name: 'Cuba', hint: 'Country' },
  { name: 'Curacao', hint: 'Country' },
  { name: 'Cyprus', hint: 'Country' },

  { name: 'Denmark', hint: 'Country' },
  { name: 'Djibouti', hint: 'Country' },
  { name: 'Dominica', hint: 'Country' },

  { name: 'Ecuador', hint: 'Country' },
  { name: 'Egypt', hint: 'Country' },
  { name: 'El Salvador', hint: 'Country' },
  { name: 'Equatorial Guinea', hint: 'Country' },
  { name: 'Eritrea', hint: 'Country' },
  { name: 'Estonia', hint: 'Country' },
  { name: 'Ethiopia', hint: 'Country' },

  { name: 'Fiji', hint: 'Country' },
  { name: 'Finland', hint: 'Country' },
  { name: 'France', hint: 'Country' },

  { name: 'Gabon', hint: 'Country' },
  { name: 'Georgia', hint: 'Country' },
  { name: 'Germany', hint: 'Country' },
  { name: 'Ghana', hint: 'Country' },
  { name: 'Greece', hint: 'Country' },
  { name: 'Grenada', hint: 'Country' },
  { name: 'Guatemala', hint: 'Country' },
  { name: 'Guinea', hint: 'Country' },
  { name: 'Guinea-Bissau', hint: 'Country' },
  { name: 'Guyana', hint: 'Country' }

];

var hangmanObj = "";
var wordHolder = "";
function gameStart() {
  // alphabet put on the UI

  $.each(alphabetArray, function(index) {
    $('#alphabetLabel').append(alphabetArray[index] + ' ');
  });

  // randomly pick of the hangmanObj and init set to "-"
  hangmanObj = gameList[Math.floor(Math.random() * gameList.length)];
  // hangmanObj = gameList[0];

  for (var i=0; i < hangmanObj.name.length; i++) {
    wordHolder+= "-";
  }

  $("#answerWord").text(wordHolder);
  $("#hint").text(hangmanObj.hint);

}

var inCorrect = 10;
var letterMatching = [];
function gameStagingOne() {
  var correct = 0
  // input word
  var letter = $("#inputLetter").val();

  // character that has already been used
  // 1) check letterMatching array before push letter
  // 2) if letter are already in use return with msg
  // 3) if not push to array

  //   $.each(alphabetArray, function(index) { } );

  if (letterMatching.length === 0) {
    letterMatching.push(letter);
  } else {

    var matchingCount = 0;
    // for(var i=0; i < letterMatching.length; i++) {
    //   if (letterMatching[i] === letter) {
    //     matchingCount++;
    //   }
    // }
    // Same behaviour replace to jquery
    $.each(letterMatching, function(index) {
      if (letterMatching[index] == letter) {
          matchingCount++;
      }
    });

    if (matchingCount > 0) {
      matchingCount = 0;

      $('.container').fadeTo(100, 0.1).fadeTo(200, 1.0);

      console.log('A letter has already been used');
    } else {
      letterMatching.push(letter);
    }
  }

  if($('#inputLetter').val() == '') {
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
        // matching letter
        wordHolder = wordHolder.substring(0, i) + letter + wordHolder.substring(i + 1, wordHolder.length + 1);
        $("#answerWord").text(wordHolder);

        $.each(alphabetArray, function(index) {
            if(alphabetArray[index].toLowerCase() == letter.toLowerCase()) {

              console.log('Matching index: ' + index);
              // replace matching css

              $('#alphabetLabel').text('');
              // alphabetArray[index] = letter.toLowerCase();
              alphabetArray[index] = letter.toLowerCase();
              $.each(alphabetArray, function(itemIndex) {
                $('#alphabetLabel').append(alphabetArray[itemIndex] + ' ');
                // $('#alphabetLabel').append('<span class="alphabetClass">' + alphabetArray[itemIndex] + '</span>').css('color', 'blue').css('font-weight', 'bold').css('background-color', '#F9F3F3');
              });

            } else {
              console.log('Unmatching index: ' + index);
            }

          // $('#alphabetLabel').append(alphabetArray[index] + ' ');
        });
      }
    }
  }

  // if doesn't match word
  if (correct == 0) {
    // pic roation in Hangman
     var url = document.getElementById("hangmangImage").src = "https://raw.githubusercontent.com/march-dave/Javascript-Challenges/master/The%20Game%20of%20Hangman/Images/hang" + inCorrect + ".gif";

    inCorrect--;
    //  var url = document.getElementById("hangmangImage").src = images[inCorrect];
    //  https://raw.githubusercontent.com/march-dave/Javascript-Challenges/master/The%20Game%20of%20Hangman/Images/hang10.gif
  }

  // if match word count reached
  if (wordHolder.toLowerCase() === hangmanName.toLowerCase()) {
    // Hangman game win > 0
    $("#hangmanGameDone").text("Hangman game win");

     var url = document.getElementById("hangmangOver").src = "https://raw.githubusercontent.com/march-dave/Javascript-Challenges/master/The%20Game%20of%20Hangman/Images/hangmanwin.png";
  }

  // if doesn't match word count
  if (inCorrect == 0) {
    // Hangman game over
    $("#hangmanGameDone").text("Hangman game over");
    $("#hangmanGameDone").addClass('gameOver');

     var url = document.getElementById("hangmangOver").src = "https://raw.githubusercontent.com/march-dave/Javascript-Challenges/master/The%20Game%20of%20Hangman/Images/hangmanlose.png";

  }

  console.log("wordHolder: " + wordHolder);

  $("#inputLetter").val("");
  $("#inputLetter").focus();

}

// console.log(gameStart(hangmanObj))
// gameStart(hangmanObj);
// guessWord();
