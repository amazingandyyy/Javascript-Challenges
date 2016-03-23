
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

$(document).ready(init);

function init() {
	keyBoardInput();
}

function keyBoardInput() {
	$(document).on('keypress', checkLiteral);
}

var matchingArray = [];
var wordHolder = "";

var viewArray = [];

function checkLiteral(e) {

	$('#dialog').empty();

	var codeValue = String.fromCharCode(e.charCode);
    var regex = new RegExp("[a-zA-Z0-9]");

    if (regex.test(codeValue)) {
        console.log('letter or number');

		var pattern = RegExp(codeValue, 'gi'); // pattern: /a/gi

		var word = matchingArray.join();
		var result = word.match(pattern);
		if (result != null ) {

			if(result.length > 0) {
				console.log("Key has already been pressed: " + result);
				$('#dialog').text(result + ' : Key has already been pressed').addClass('selected');
					return;
				} else {
			}
		} else {
			matchingArray.push(codeValue);
		}

		$("#answerWord").empty();
		$("#answerWord").append(matchingArray);
	}

	gameDisplayMessage();
}

function gameDisplayMessage() {

	if (matchingArray.length > 36) {
		$('#dialog').text('You won the game');
	}

}
