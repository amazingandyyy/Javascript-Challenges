// Create a function that operates on a binary string and converts it to a decimal number

// You can't use JavaScript built-in parsing (parseInt and the like)
// Make the function available to be called on strings as a method
// Create a function called "assert_equal" that will determine if the 2 arguments passed to it are equal
// Use this assert_equal function to test your binaryToDecimal function
// assert_equal("11001010".binaryToDecimal(), 202);
// assert_equal("1110".binaryToDecimal(), 14);

function assert_equal(bin, dec) {

// binary string to decimal number

	if (bin === dec) {
		console.log("binaryToDecimal");
	}

// 	function binaryToDecimal() {

// 		var binary;
			
// 			for(var i=0; i < bin.length - 1; i++) {
// 				binary = bin.charAt(i);

// 				console.log("binary: " + binary);
// 			}
// 	}

// var obj = {

// 	"aaa" : binaryToDecimal()

// };

// return obj;	

}

String.prototype.binaryToDecimal = function() {

	var return;

	return 14;

}

// console.log(assert_equal("11001010".binaryToDecimal(), 202));
console.log(assert_equal("1110".binaryToDecimal(), 14));