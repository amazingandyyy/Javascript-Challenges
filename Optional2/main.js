// Create a function decodeStr()

// It will receive a string argument which has 2 parts - a stream of characters and a key - and return the decoded message. Those 2 parts will be separated by the "|" sign in the message.

// Example: "sfGuisOthO12D|2 6 9 12"

// The key is a space-separated list of integers. The decoded message will be the letters positioned on those integers in the original stream, so for "2 6 9 12", we want the letters on positions 2, 6, 9, and 12 (starting the count from 0)

// decodeStr("sfGuisOthO12D|2 6 9 12") // "GOOD";
// decodeStr("01R34E6D|2 5 7") // "RED";

function decodeStr(str) {

	var array = str.split('|');
	var value = array[0];
	var key = array[1];
	var number = key.split(" ");

	var message = "";
	for(var i=0; i < number.length; i++) {
		message += value.charAt(number[i]);
	}

	return message;
}

console.log(decodeStr("sfGuisOthO12D|2 6 9 12")); // "GOOD";
console.log(decodeStr("01R34E6D|2 5 7")); // "RED";