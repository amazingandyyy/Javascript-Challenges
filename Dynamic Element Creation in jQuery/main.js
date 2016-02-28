$(document).ready(function() {
  
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");


  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");
  // $(".container #gameBoard").append("<div></div>");


	var elements = $();
	for(x = 0; x < 64; x++) {
	    elements = elements.add('<div>'+x+'</div>');
	    // or 
	    // var element = $('<div>'+x+'</div>');
	    // elements = elements.add(element);
	}
	$('#gameBoard').append(elements);




});
