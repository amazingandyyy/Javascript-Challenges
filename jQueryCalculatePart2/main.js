
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
	$('.operator').on('click', operatorClicked);
	$('#invert').on('click', invertClicked);
	$('#root').on('click', rootClicked);
	$('#decimal').on('click', decimalClicked);
	$('#equals').on('click', equalsClicked);
	$('#clear').on('click', clearClicked);
}

function numClicked() {

	var currVal = display.val();
	var clickedNum = $(this).text();

	if(currVal === '0' || toBeCleared) {
		toBeCleared = false;
		display.val(clickedNum);
	} else {
		display.val(currVal + clickedNum);
	}
}

function operatorClicked () {
	alert('Operator button clicked!');
}

function invertClicked () {
	alert('Invert button clicked!');
}

function rootClicked () {
	alert('Root button clicked!');
}

function decimalClicked () {
	alert('Decimal button clicked!');
}

function equalsClicked () {
	alert('Equals button clicked!');
}

function clearClicked () {
	reset();
	display.val('0');
}

function reset() {

	toBeCleared = true;
	isOperating = false;
	isFloating = false;
	operator = null;
	operand = null;

	$('#currop').text('');
}

function invertClicked() {
	display.val(display.val() * -1);
}