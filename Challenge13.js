// Write a JavaScript function that takes a sentence as an argument and determines which word in that sentence has the greatest number of repeated letters (the repeated letters do not have to be consecutive).
      //
      // If the sentence has multiple words with the same max of repeated letters, return them all in an Array.
      //
      // Test Case
      //
      // Would select the words:
      // wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale")
      //
      // ["attribute", "success"]

      function wordSelector(sentence) {

          // 1) split sentence to array
          // How to: Use split or match Method
          // match method is more useful one line of code parssing token such as  ".", "–"
          var array = sentence.match(/[a-z]+/ig);

          var arrayReturn = [];
          var highistRepeat = 1;

          for (var i = 0; i < array.length; i++) {

              //["I","attribute","my","success","to"...]
              var arrayLetter = array[i];
              // Repeat letter counter
              var wordRepeats = repeatLetterCounter(arrayLetter);

              if (wordRepeats > highistRepeat) {
                  arrayReturn = []; // reset array
                  arrayReturn.push(arrayLetter);

                  highistRepeat = wordRepeats;
              }
              else if (highistRepeat === wordRepeats) {
                  arrayReturn.push(arrayLetter);
              }
          }

          return arrayReturn;
      }

      function repeatLetterCounter(arrayLetter) {

          var uniqueTokenLetter = "";
          var repeatLetterCount = 2;

          for (var i = 0; i < arrayLetter.length; i++) {

              if (uniqueTokenLetter.indexOf(arrayLetter.charAt(i)) === -1) {

                  // pattern genarated format example: /s/gi
                  var pattern = RegExp(arrayLetter[i], "gi");

                  // return matching letter "sucess" ==> ["s", "s", "s"]
                  var arrayMatchingLetter = arrayLetter.match(pattern);

                  if (arrayMatchingLetter.length > repeatLetterCount) {
                      repeatLetterCount = arrayMatchingLetter.length;
                  }

                  uniqueTokenLetter += arrayLetter.charAt(i);
              }
          }

          return repeatLetterCount;

      }

       console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));
