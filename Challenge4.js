// Challenge 4
// Write a JavaScript function that would swap the case of each character in the string you pass to it as an argument.
//
// Test Case
//
// swapCase("Life is 10% what happens to you, and 90% of how you REACT to it");
// Would return:
//
// "lIFE IS 10% WHAT HAPPENS TO YOU, AND 90% OF HOW YOU react TO IT"



//var sentence = "Life is 10% what happens to you, and 90% of how you REACT to it";
function swapCase(sentence) {

var i = 0;
var character = '';
var output = '';

while(i<= sentence.length) {

character = sentence.charAt(i);

if (character === character.toUpperCase()) {
  character = character.toLowerCase();
}
else {
 character = character.toUpperCase();
}

output = output.concat(character);
i++;
}

  return output;
}

// console.log(swapCase(sentence));
console.log(swapCase("Life is 10% what happens to you, and 90% of how you REACT to it"));
