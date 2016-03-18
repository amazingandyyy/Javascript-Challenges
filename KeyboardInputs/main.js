
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

function appendliteral() {
	$.each(creatingArray, function(index) {
		$('#literalLabel').append(creatingArray[index] + ' ');
	});
}

function keyBoardInput() {
	// $("#inputLetter").on('keypress', checkLiteral2);

	$(document).on('keypress', checkLiteral2);
}

var letterMatching = [];
function checkLiteral2(e) {

	var codeValue = String.fromCharCode(e.charCode);

	if ($.isNumeric(codeValue)) {
		
	   var pattern = RegExp(codeValue, 'gi'); // pattern: /a/gi
	   var word = letterMatching.join();
	   var result = word.match(pattern);
	   if (result != null ) {
	   		
	   		if(result.length > 0) {
				console.log(result);
	   		} else {

	   		}

	   } else {
			letterMatching.push(codeValue);
	   }

	}


}



function checkLiteral() {
	var correct = 0;

	var letter = $("#inputLetter").val();
	var pattern = RegExp(letter, 'gi'); // pattern: /a/gi

	var str = creatingArray.join('');
	var result = str.match(pattern);
	// letterMatching.push(result);


	// $.each(creatingArray, function(index) {
 //      if (creatingArray[index] === letter) {
 //          letterMatching.push(letter);
 //      }
 //    });


	 // $("#btnGuess").click(guessWord);
    
	 //  function guessWord() {
	  
	 //   var letter = $("#guessLetter").val();
	 //   var word = 'ABC';
	 //   var pattern = RegExp(letter, 'gi'); // pattern: /a/gi

	 //   var result = word.match(pattern);
	 //   alert('Ignore case sensitive:' + result);
	   
	 //  }
  
	// console.log("letter: " + letter);
	  // if(letter == '') {
	  //    alert('Input can not be left blank');
	  //    return;
	  // }
 }

