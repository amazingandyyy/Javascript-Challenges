// Use JavaScript to manipulate the DOM

// You may only use Vanilla JavaScript (this means no libraries like jQuery!)
// Start with the HTML/CSS provided here
// Don't forget to include Bootstrap!
// Remove all of the HTML inside of the main container
// On page load, use JavaScript to create all of these elements. In other words, all of the HTML inside of your container should be added via JavaScript - none of them should exist in your HTML!

// After the JavaScript executes, the page should look identical to the provided sample HTML
// On you have created all of the buttons, add click handlers to them. Whenever a button is clicked, replace the text in the <h3> with the contents of the button
// For example, if the user clicks the "Left" button, the <h3> should then say "Left"

'use strict';

var buttons = [];

document.addEventListener('DOMContentLoaded', myFunction);

function myFunction() {
	var elementDiv = document.createElement('div');
	elementDiv.className = 'row';
	document.body.appendChild(elementDiv);	

	// document.body.appendChild(element);	
	var element = document.createElement('button');
	element.innerText = 'my Button';
	element.addEventListener('click',  replaceText);

	// document.body.appendChild(element);
	elementDiv.appendChild(element);
}

function replaceText() {
	var elementH3 = document.createElement('h3');
	elementH3.innerText = "Left"	

	document.body.appendChild(elementH3);	
}

// <div class="container">
//   <div class="row">
//     <div class="col-md-12">
//       <h3>Nothing clicked yet!</h3>
//       <button type="button" class="btn btn-default btn-lg">Star</button>
//       <hr>
//       <div>
//         <div class="btn-group">
//           <button type="button" class="btn btn-default">1</button>
//           <button type="button" class="btn btn-default">2</button>
//           <button type="button" class="btn btn-default">3</button>
//           <button type="button" class="btn btn-default">4</button>
//         </div>
//         <div class="btn-group">
//           <button type="button" class="btn btn-default">5</button>
//           <button type="button" class="btn btn-default">6</button>
//           <button type="button" class="btn btn-default">7</button>
//         </div>
//         <div class="btn-group">
//           <button type="button" class="btn btn-default">8</button>
//         </div>
//       </div>
//       <hr>
//       <div>
//         <div class="btn-group btn-group-lg">
//           <button type="button" class="btn btn-default">Left</button>
//           <button type="button" class="btn btn-default">Middle</button>
//           <button type="button" class="btn btn-default">Right</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
