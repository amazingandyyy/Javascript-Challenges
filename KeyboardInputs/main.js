
// Using jQuery, create a game that requires the user to press every letter and number on the keyboard
// Start by creating an array with all 26 letters and 10 numbers
// Display all of the characters on the screen. This should be done using a jQuery to append to the DOM once.
// In other words, don't do a separate append for each character
// Whenever the user presses a key, check to see if it is a number or a letter that has not been pressed already

// If it is, change the appearance of that character (for example, grey it out to show that it has been pressed already)
// If they key has already been pressed, tell the user!
// Once all the characters have been pressed, display a message telling the user that they have won the game!
// The message should be shown using jQuery


'use strict';

var creatingArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m'
					,'n','o','p','q','r','s','t','u','v','w','x','y','z'
					,'1','2','3','4','5','6','7','8','9','10'
					];

$(document).ready(init);

function init() {
	appendliteral();
	keyBoardInput();
}

var literalArray = [];
function appendliteral() {
	$.each(creatingArray, function(index) {
	 	var $appendLabel = $('<span>').text(creatingArray[index]).addClass('selected');
	 	literalArray.push($appendLabel);
	});

	$('#literalLabel').append(literalArray);
}

function keyBoardInput() {
	$(document).on('keypress', checkLiteral);
}

var letterMatchingArray = [];
function checkLiteral(e) {

	$('#dialog').empty();

	var codeValue = String.fromCharCode(e.charCode);
    var regex = new RegExp("[a-zA-Z0-9]");

    if (regex.test(codeValue)) {
        console.log('letter, number');
    
    // e.preventDefault();
    // return false;

	// if ($.isNumeric(codeValue)) {


		// var pattern = RegExp(letter, "gi");
		// var hangmanName = hangmanObj.name;

		// for (var i=0; i < hangmanName.length; i++) {

		// if (hangmanName.substring(i, i + 1).match(pattern) != null) {

		// 	  if ( hangmanName.substring(i, i + 1).match(pattern).length > 0 ) {
		// 	    correct++;
		// 	    // matching letter replace to Label
		// 	    wordHolder = wordHolder.substring(0, i) + letter + wordHolder.substring(i + 1, wordHolder.length + 1);
		// 	    $("#answerWord").text(wordHolder);
		// 	  }
		// 	}
		// }
		
	   var pattern = RegExp(codeValue, 'gi'); // pattern: /a/gi
	   var word = letterMatchingArray.join();
	   var result = word.match(pattern);
	   if (result != null ) {
	   		
	   		if(result.length > 0) {
				console.log("Key has already been pressed: " + result);

				// var $grayLetter = $('#literalLabel').attr('disabled', 'disabled');

				// $(selections).attr( "disabled", "disabled" );
				// $('#literalLabel').append('<span>' + creatingArray[index] + ' ' + '</span>');

				$('#dialog').text(result + ' : Key has already been pressed');

	   		} else {
	   			
	   		}

	   } else {
			letterMatchingArray.push(codeValue);
	   }

	// }
	}

	gameDisplayMessage();
}

function gameDisplayMessage() {

	if (letterMatchingArray.length >= 26) {
		$('#dialog').text('You won the game');
	}

}
