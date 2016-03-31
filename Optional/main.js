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
		console.log("binaryToDecimal are equal");
	}
}

String.prototype.binaryToDecimal = function() {

	return this.split('').reverse().reduce(function(x, y, i){
	      return (y === '1') ? x + Math.pow(2, i) : x;
	    }, 0);

	// return this;
}

// console.log(assert_equal("11001010".binaryToDecimal(), 202));
console.log(assert_equal("1110".binaryToDecimal(), 14));

// function binaryToDecimal( binaryNumber ) {
        
//    // decimalNumber represents a summation of digit values.
//    var decimalNumber = 0;

//    // placeValue represents a power of two.
//    var placeValue = 1;

//    // Compute each digit value (from right to left).
//    while ( binaryNumber > 0 ) {

//      // Divide binaryNumber by 10. Store the decimal remainder.
//      var remainder = binaryNumber % 10;

//      // Determine the remainder digit.
//      var digitValue = remainder * placeValue;

//      // Add the digitValue to the decimalNumber sum.
//      decimalNumber = decimalNumber + digitValue;

//      // Increment the placeValue
//      placeValue *= 2;

//      // Increment to the next digit (left adjacent).
//      binaryNumber = Math.floor( binaryNumber / 10 );
//    }

//    // Return the sum of digit values.
//    return decimalNumber;
//  }