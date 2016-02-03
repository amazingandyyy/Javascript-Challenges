//Numbers and ASCII

//Base 3, we only can use 0, 1, 2. The first 6 numbers would be:
0, 1, 2, 10, 11, 12

//Keep counting, what are the next 6 numbers?
20, 21, 22, 30, 31, 32


// convert it into a sentence.
var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];

ascii.map(function(parameter) {
	console.log(String.fromCharCode(parameter));
});
