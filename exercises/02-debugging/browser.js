// Storing the box as a variable
var box = document.getElementById("box");

// Putting text in the box with textContent
box.textContent = "...";

/**
 * So here are some logging examples...
 */
console.log("Huray! You opened your terminal!");
console.log(
  "Here is an example of inspecting an HTML element (the gray box):",
  box
);

/**
 * Using your console and/or breakpoints, fix the code below
 * so that it outputs the following in the gray box:
 * @example
 * ...........................
 * 1 apple
 * 2 kiwi
 * 3 banana
 * 4 orange
 * 5 blueberry
 * 6 cranberry
 * 7 mango
 * 8 passion fruit
 * 9 avocado
 * 10 cherry
 * ...........................
 */
function getMessage() {
  var message = "";

  for (var i = 1; i < 10; i++) {
    message = message + "...";
    console.log(message);
  }

  message = message + "\n"; // New line

  var fruits = ["apple", "kiwi", "banana", "orange", "blueberry"];
  for (var j = 0; j < fruits.length; j++) {
    message = message + String(j+1) + " " + fruits[j] + "\n";
    console.log(message);
  }

  var moreFruits = ["cranberry", "mango", "passion fruit", "avocado", "cherry"];
  for (var k = 0; k < moreFruits.length; k++) {
    var num = k + fruits.length;
    message = message + String(num) + " " + moreFruits[k] + "\n";
    console.log(message);
  }

  for (var z = 1; z < 10; z++) {
    message = message + "...";
    console.log(message);
  }

  return message;
}

function writeMessage() {
  box.textContent = getMessage();
}

// After 1 second, puts new text inside of the box
window.setTimeout(writeMessage, 1000);
