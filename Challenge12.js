// Write jQuery code to loop over every DIV in any HTML document and give that DIV a random color background. Then invert the DIVs background color using the function below, and use the inverted color for the font on that DIV.
//
// Test your code in Chrome console on many pages.
//
// Here's the function to use for inverting colors:
//
// function invertColor(hexTripletColor) {
// var color = hexTripletColor;
// color = color.substring(1);           // remove #
// color = parseInt(color, 16);          // convert to integer
// color = 0xFFFFFF ^ color;             // invert three bytes
// color = color.toString(16);           // convert to hex
// color = ("000000" + color).slice(-6); // pad with leading zeros
// color = "#" + color;                  // prepend #return color;
// }
//

$(document).ready(function() {

    function invertColor(hexTripletColor) {
        var color = hexTripletColor;
        color = color.substring(1); // remove #
        color = parseInt(color, 16); // convert to integer
        color = 0xFFFFFF ^ color; // invert three bytes
        color = color.toString(16); // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color; // prepend #
        return color;
    };

    $("div").each(function(index, element) {
      // var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var randomColor = Math.floor(Math.random());
        var invertedColor = invertColor(randomColor);

        $(this).css({
            "background-color": invertedColor,
            "color": invertedColor
        });

    });
});
