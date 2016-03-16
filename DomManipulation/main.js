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
var elementDivRow;

document.addEventListener('DOMContentLoaded', init);

function init() {
	setUpDivRow();
	setUpDiv('col-md-12');
	setUpH3();
	setUpStarButton();
	setUpHr();

	setUpDivEmpty();
	setUpDivBtnGroup('btn-group');
	setUpBtnGroup(0, 4);

	setUpDivBtnGroup('btn-group');
	setUpBtnGroup(4, 7);

	setUpDivBtnGroup('btn-group');
	setUpBtnGroup(7, 8);

	setUpHr();

	setUpDivEmpty();
	setUpDivBtnGroup('btn-group btn-group-lg');
	setUpBtnGroupThreeOption();
}

function setUpDivRow() {
	elementDivRow = document.createElement('div');
	elementDivRow.className = 'row';
	document.getElementsByClassName('container')[0].appendChild(elementDivRow);
}

var elementColMD;
function setUpDiv(divName) {
	elementColMD = document.createElement('div');
	elementColMD.className = divName;
	elementDivRow.appendChild(elementColMD);
}

function setUpH3() {
	var elementH3 = document.createElement('h3');
	elementH3.innerText = 'Nothing clicked yet!';
	elementColMD.appendChild(elementH3);
}

function setUpStarButton() {
	var elementStarButton = document.createElement('button');
	elementStarButton.innerText = 'Star';
	elementStarButton.className = 'btn btn-default btn-lg';
	elementColMD.appendChild(elementStarButton);
}

function setUpHr() {
	var element = document.createElement('hr');
	elementColMD.appendChild(element);
}

var elementDivEmpty = '';
function setUpDivEmpty() {
	elementDivEmpty = document.createElement('div');
	elementColMD.appendChild(elementDivEmpty);
}

var elementDivBtnGroup = '';
function setUpDivBtnGroup(divName) {
	elementDivBtnGroup = document.createElement('div');
	elementDivBtnGroup.className = divName;
	elementDivEmpty.appendChild(elementDivBtnGroup);
}

function setUpBtnGroup(buttonCountStart, buttonCountEnd) {

	var i = buttonCountStart;

	for (i ; i < buttonCountEnd; i++) {
		var element = document.createElement('button');
		element.innerText = i + 1;
		element.type = 'button';
		element.className = 'btn btn-default';
		elementDivBtnGroup.appendChild(element);
	}
}

function setUpBtnGroupThreeOption() {

	var threeOption = ['Left', 'Middle', 'Right'];

	for (var i = 0 ; i < threeOption.length; i++) {
		var element = document.createElement('button');
		element.innerText = threeOption[i];
		element.type = 'button';
		element.className = 'btn btn-default';
		elementDivBtnGroup.appendChild(element);

		element.addEventListener('click' , replaceText);
	}
}

function replaceText() {

	
}


	// var element = document.createElement('button');
 //  	element.innerText = 'my Button';
 //  	element.addEventListener('click',  replaceText);





// function sayHello2(name) {
//     var text = 'Hello ' + name; // Local variable
//     var say = function() { console.log(text); }
//     return say;
// }
// var say2 = sayHello2('Bob');
// say2(); // logs "Hello Bob"


// <div class="container">
//   <div class="row">
//     <div class="col-md-12">
//       <h3>Nothing clicked yet!</h3>
//       <button type="button" class="btn btn-default btn-lg">Star</button>
//       <hr>
//       <div>
//         <div class="btn-group">
//           <button type="button" class="btn btn-default">1</button>
//           <button type="button" class="btn btn-default">2</button>
//           <button type="button" class="btn btn-default">3</button>
//           <button type="button" class="btn btn-default">4</button>
//         </div>
//         <div class="btn-group">
//           <button type="button" class="btn btn-default">5</button>
//           <button type="button" class="btn btn-default">6</button>
//           <button type="button" class="btn btn-default">7</button>
//         </div>
//         <div class="btn-group">
//           <button type="button" class="btn btn-default">8</button>
//         </div>
//       </div>
//       <hr>
//       <div>
//         <div class="btn-group btn-group-lg">
//           <button type="button" class="btn btn-default">Left</button>
//           <button type="button" class="btn btn-default">Middle</button>
//           <button type="button" class="btn btn-default">Right</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
