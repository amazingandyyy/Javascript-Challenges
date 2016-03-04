$(document).ready(function() {

	$('#boardSize').keyup(function() { 

			var size = $('#boardSize').val();
			var elements = $();

			// resize css

			for(x = 0; x < 64; x++) {
				elements = elements.add('<div style=width:' + size + 'px;' +  'height:' + size + 'px;' +'>');
				elements = elements.add('</div>');
			}
			$('#gameBoard').html(elements);
		
	});
});