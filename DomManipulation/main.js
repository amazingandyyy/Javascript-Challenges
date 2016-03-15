// Use JavaScript to manipulate the DOM

// You may only use Vanilla JavaScript (this means no libraries like jQuery!)
// Start with the HTML/CSS provided here
// Don't forget to include Bootstrap!
// Remove all of the HTML inside of the main container
// On page load, use JavaScript to create all of these elements. In other words, all of the HTML inside of your container should be added via JavaScript - none of them should exist in your HTML!

// After the JavaScript executes, the page should look identical to the provided sample HTML
// On you have created all of the buttons, add click handlers to them. Whenever a button is clicked, replace the text in the <h3> with the contents of the button
// For example, if the user clicks the "Left" button, the <h3> should then say "Left"

'use strict';

var buttons = [];

document.addEventListener('DOMContentLoaded', myFunction);

function myFunction() {
	var element = document.createElement('button');
	element.innerText = 'my Button';
	element.addEventListener('click',  replaceText);


	document.body.appendChild(element);	
}

function replaceText() {
	var elementH3 = document.createElement('h3');
	elementH3.innerText = "Left"	

	document.body.appendChild(element3);	
}