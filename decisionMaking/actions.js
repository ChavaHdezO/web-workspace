/*
// If Statements

// let age = parseInt(readLine(), 10); // This code don't work cause readLine() function don't exist in JavaScript. @forum_on_internet
// let age = prompt("Your age?"); // That's all I need @BroFar @Sololearn
let age = parseInt(prompt("Your age?")); // This code return a value as a int number. @ODLNT @Sololearn
// This code verifies the whether the given input was a valid number @Ipang @Soloearn
if(!isNaN(age)) {
    console.log(age);
} else {
    console.log("Please enter a number!");
}
// End of verification code @Ipang @Sololearn
if(age <= 19) {
    console.log("Take your kindle");
}
*/
/*
// Else If Statements

let score = 98;

if(score >= 100){
  console.log("Level Completed!");
} else {
  console.log("Try again!");
}

let number = -5;

if(number >= 0){
  console.log("Positive number");
} else {
  console.log("Negative number");
}

let time = 15;

if (time < 10) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

let purchase = 2300;

if(purchase > 3000){
  console.log('Discount: 20%');
} else if (purchase > 2000){
  console.log('Discount: 10%');
} else {
  console.log('No discount');
}

let stopLight = 'green';

if (stopLight == 'red') {
  console.log('Stop!');
} else if (stopLight == 'yellow') {
  console.log('Slow down.');
} else if (stopLight == 'green') {
  console.log('Go!');
} else {
  console.log('Unknown!');
}

let num = 42;
if (num <0) {
  console.log('Negative');
}
else if (num > 0) {
  console.log('Positive');
} else {
console.log('Zero');
}

// -------------------------
let color = prompt("Color?");

  //  red => 1
  //  green => 2
  //  black => 3
  //  other cases => unknown


//your code goes here
if(color == "red") {
    console.log("1");
} else if(color == "green") {
    console.log("2");
} else if(color == "black") {
    console.log("3");
} else {
    console.log("unknown");
}
// -------------------------

*/
// Switch Statements

let choice = 2;

switch(choice){
  case 1:
      console.log("Sports");
      break;
  case 2:
      console.log("Business");
      break;
  case 3:
      console.log("Technology");
      break;
}

let color ="yellow";

switch(color) {
  case "blue": 
    console.log("This is blue.");
    break;
  case "red": 
    console.log("This is red.");
    break;
  default: 
    console.log("Color not found.");
}

let type = parseInt(prompt("Type of coffee?"));
/*
1 => Americano
2 => Espresso
3 => Cappuccino
*/

//your code goes here
switch(type) {
    case 1:
        console.log("Americano");
        break;
    case 2:
        console.log("Espresso");
        break;
    case 3:
        console.log("Cappuccino");
        break;
    default:
        console.log("Unknown");
}