function decoder(key, Code) {

	// array.map()

	// var array = str.match(/[a-z-]+/ig);
	  // map whether each word in array is palindrome or not
	var array = key.split("");
	var returnArray = array.map(function(str) {
		return str.split("").join(""); // check for palindrome
	});

	console.log(returnArray);

		// var array = param.split(" ");
		// // console.log("array:" + array);

		// var returnArray = array.map(function(str) {
		//   return str === str.split("").reverse().join("");
		// });

		// return returnArray;
}

var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var code ='2, 14, 3, 8, 13, 6'
decoder(key, code);

// Key: ABCDEFGHIJKLMNOPQRSTUVWXYZ
// Code: 2, 14, 3, 8, 13, 6
// CODING




// function compressor(s) {

// 	var array = s.match(/[a-z]+/ig);

// 	var arrayReturn = [];
// 	var highistRepeat = 0;

// 	 for (var i = 0; i < array.length; i++) {

//           //["I","attribute","my","success","to"...]
//           var arrayLetter = array[i];
//           // Repeat letter counter
//           var wordRepeats = repeatLetterCounter(arrayLetter);

//           if (wordRepeats > highistRepeat) {
//               arrayReturn = []; // reset array
//               arrayReturn.push(arrayLetter);

//               highistRepeat = wordRepeats;
//           }
//           else if (highistRepeat === wordRepeats) {
//               arrayReturn.push(arrayLetter);
//           }
//       }
	
// 	console.log(arrayReturn);

// }

// function repeatLetterCounter(arrayLetter) {

//           var uniqueTokenLetter = "";
//           var repeatLetterCount = 2;

//           for (var i = 0; i < arrayLetter.length; i++) {

//               if (uniqueTokenLetter.indexOf(arrayLetter.charAt(i)) === -1) {

//                   // pattern genarated format example: /s/gi
//                   var pattern = RegExp(arrayLetter[i], "gi");

//                   // return matching letter "sucess" ==> ["s", "s", "s"]
//                   var arrayMatchingLetter = arrayLetter.match(pattern);

//                   if (arrayMatchingLetter.length > repeatLetterCount) {
//                       repeatLetterCount = arrayMatchingLetter.length;
//                   }

//                   uniqueTokenLetter += arrayLetter.charAt(i);
//               }
//           }

//           return repeatLetterCount;

//       }

// var s = 'aaaaabbbbbbbbbccccpqrstuv';
// compressor(s);

// 	// console.log(array);
// // a5b9c4pqrstuv

// // aaaaabbbbbbbbbccccpqrstuv


// // function splitSum(code, splitter) {

// //     var arr = code.split(splitter);
    
// //     var result;
  
// //     result = arr.reduce(function (a, b) {
// //     	return parseInt(a) + parseInt(b);
// // 	});

// //     console.log(result);
// // }


// // var code ='3/4/5/1';
// // var splitter = '/';

// // splitSum(code, splitter)

