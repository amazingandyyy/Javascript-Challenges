'use strict';


$(document).ready(init);

function init() {

	$('#boardSize').keyup(function() { 

			var size = $('#boardSize').val();
			var elements = $();

			// resize css

			for(var x = 0; x < 64; x++) {
				elements = elements.add('<div style=width:' + size + 'px;' +  'height:' + size + 'px;' +'>');
				elements = elements.add('</div>');
			}
			$('#gameBoard').html(elements);

	});

}

//  var size = 8;
//     var board = "";
//     for (var y = 0; y < size; y++) {
//       for (var x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0)
//           {
//         $(".tile").eq(count).addClass("black");
//       } 
          
//           else {
//         $(".tile").eq(count).addClass("white");
//       }
//     }
//   board += "\n";
// }