
var isOperating = false;
var isFloating = false;
var toBeCleared = false;
var operator;
var operand;
var display;

$(document).ready(init);

function init() {
	display = $('#display');
	$('.num').on('click', numClicked);
	// $('.operator').on('click', operatorClicked);
	// $('#invert').on('click', invertClicked);
	// $('#root').on('click', rootClicked);
	// $('#decimal').on('click', decimalClicked);
	// $('#equals').on('click', equalsClicked);
	// $('#clear').on('click', clearClicked);
}

function numClicked () {
	alert('Number button clicked!');
}