$(document).ready(function() {

	$('#boardSize').keyup(function() { 

		var size = $('#boardSize').val();

		var elements = $();
		for(x = 0; x < 64; x++) {
			elements = elements.add('<div style=width:' + size + 'px;' +  ' ' + '>');
			elements = elements.add('</div>');
			// elements = elements.add('<div style=width:' + size + 'px' + ';height:' + size + 'px;background-color:#000;></div>');
		
			// <div style="width:20px;" height:20px;=""></div>

		}
		$('#gameBoard').append(elements);

	});
});