//Numbers and ASCII

//Base 3, we only can use 0, 1, 2. The first 6 numbers would be:
// 0, 1, 2, 10, 11, 12

// 20, 21, 22, 30, 31, 32
//Keep counting, what are the next 6 numbers?



function fromCharCode() {

  // convert it into a characters.
  var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];
  var returnCharCode =  ascii.map(function(parameter) {
    return String.fromCharCode(parameter);
  });

  return returnCharCode.join("");
}

var stringCharCode = fromCharCode();
console.log(stringCharCode);
