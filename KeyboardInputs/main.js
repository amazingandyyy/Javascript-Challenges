
// Using jQuery, create a game that requires the user to press every letter and number on the keyboard

// Start by creating an array with all 26 letters and 10 numbers
// Display all of the characters on the screen. This should be done using a jQuery to append to the DOM once. In other words, don't do a separate append for each character
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

function appendliteral() {
	$('#literalLabel').append();

	$.each(creatingArray, function(index) {
		$('#literalLabel').append(creatingArray[index] + ' ');
	});
}

function keyBoardInput() {
	$("#inputLetter").on('keyup', checkLiteral);
}

function checkLiteral() {
	var correct = 0;

	var letter = $("#inputLetter").val();
	  if(letter == '') {
	     alert('Input can not be left blank');
	     return;
	  }
 }

