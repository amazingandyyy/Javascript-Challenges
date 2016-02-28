$(document).ready(function() {

	var elements = $();
	for(x = 0; x < 64; x++) {
	    elements = elements.add('<div></div>');
	}
	$('#gameBoard').append(elements);

});
