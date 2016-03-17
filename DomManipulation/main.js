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

var elementDivRow;
var elementColMD;
var elementDivEmpty = '';
var elementDivBtnGroup = '';

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

function setUpDivEmpty() {
	elementDivEmpty = document.createElement('div');
	elementColMD.appendChild(elementDivEmpty);
}

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

		element.addEventListener('click', applyHeader);
	}
}

function setUpBtnGroupThreeOption() {

	var threeOption = ['Left', 'Middle', 'Right'];

	for (var i = 0 ; i < threeOption.length; i++) {
		var element = document.createElement('button');
		element.innerHTML = threeOption[i];
		element.type = 'button';
		element.className = 'btn btn-default';
		elementDivBtnGroup.appendChild(element);

		element.addEventListener('click', applyHeader);
	}
}

function applyHeader(e) {

	var pass = e.target || e.srcElement;
	var header = pass.innerHTML;

	var elementH3 = document.getElementsByTagName('H3');
	elementH3[0].innerHTML = header;
}
