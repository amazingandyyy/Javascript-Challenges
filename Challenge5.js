// jQuery Basic
// Challenge 5
// Learn jQuery basics for working with the DOM (selecting, manipulating, events)
//
// Implement a light/dark theme feature using jQuery. Make a basic webpage that has some text on it. Put links in the footer that change the background and text color when you click them. (dark on light vs light on dark)

//
// <span id="linkFieldOne">One</span>
// <span id="linkFieldTwo">Two</span>
//
// <footer id="footer">Coding House Footer</footer>


$(document).ready(function() {

  $("#linkFieldOne").click(function() {
    $("#footer").css('background-color', '#696969');
  });

   $("#linkFieldTwo").click(function() {
    $("#footer").css('background-color', '#FFFAF0');
  });

});
