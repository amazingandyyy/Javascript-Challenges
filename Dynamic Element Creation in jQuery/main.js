$(document).ready(function() {

	
	$('#boardSize').keyup(function() { 

		var size = $('#boardSize').val();

		console.log('size: ' + size);

		var elements = $();
		for(x = 0; x < 64; x++) {
		    // elements = elements.add('<div style="width:' +  size +'px></div>');
		      elements = elements.add('<div style=width:' + size + 'px;></div>');
		}
		$('#gameBoard').append(elements);

		// $("ul.tabbed").css("width", $("ul.tabbed").children("li").size() * 115);

	});

});




 