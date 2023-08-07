/*
console.log("Hello World!");
*/

/*
Challenge:
The local pet adoption center wants to keep track of the animals it has available. Let's create a profile for one of them.
Tasks:
1.- Create a variable called petName and assign the value Jessie to it.
2.- Create a variable called breed and assign the value Labrador to it.
3.- Use two console.log() statements to output these variables in the console, each on a different line.
    Make sure the output is the following:

    Jessie
    Labrador
---------------------------------------------------------------------------------------------------------
let petName = "Jessie";
let breed = "Labrador";

console.log(petName);
console.log(breed);
*/

/*
Challenge:
Let's add some numerical variables with more information:
Tasks:
1.- Create a variable called age and assign the value of 3 to it.
2.- Create a variable called siblings and assign the value of 0 to it.
3.- Use console.log() to output the age variable.
4.- Use another console.log() to output the siblings variable.
---------------------------------------------------------------------------------------------------------
let age = 3;
let siblings = 0;

console.log(age);
console.log(siblings);
*/

/*
CONVERTER PROGRAM
Instructions:
Let's start by creating the variables we'll use to convert between miles and kilometers.
Tasks:
1.- Create a variable called miles and set its value to 24.
2.- Create a variable called kilometers and set its value to 40.
3.- Create a variable called number and set its value to 1.609344.
Instructions:
We want to save the conversions inside variables. Let's do it both ways, from kilometers to miles and from miles to kilometers.
Tasks:
1.- Create a variable called kilometersToMiles. Set the value to kilometers/number.
2.- Create a variable called milesToKilometers. Set the value to miles * number.
Instructions:
We've already done our conversions! Let's display them.
Tasks:
1.- Create a display statement that shows the string Distance conversions.
2.- Create a second display statement that shows the string of dashes you can copy below. This will help make the output more readable:
-----------------------
Next, let's include a display statement that shows the kilometers variable joined with the string " kilometers are:". The output should be like this:
Distance conversions 
----------------------- 
40 kilometers are:
Instructions:
Next, use the console to display the miles converted,
Tasks:
1.- Create a display statement that shows the kilometersToMiles variable joined with the string " miles". The output for the whole code should be like the following:
Distance conversions 
----------------------- 
40 kilometers are: 
24.854847689493358 miles
Instructions:
Now let's display milesToKilometers.
Tasks:
1.- Create a display statement that shows ---- in the console. Make sure to add it as a string between parentheses.
2.- Display the conversion from miles to kilometers just as we did from kilometers to miles.
3.- Lastly, add a special display statement. Code console.log() and inside the parentheses add a specially formatted string that will create a line break, "\n".
Like this example
console.log("\n");
Instructions:
We already have a piece of code that converts miles and kilometers. But we're not done yet. Let's make it convert Celsius to Fahrenheit and the other way round.
For the next instructions feel free to either copy-paste everything you've already written or write it again.
Tasks:
1.- Create a new celsius variable and set it to 5.
2.- Create a fahrenheit variable and set it to 41.
Instructions:
Let's do some conversions.
Tasks:
1.- Create a celsiusToFahrenheit variable.
2.- Set its value to (celsius * 9 / 5) + 32.
3.- Create a fahrenheitToCelsius variable.
4.- Set its value to (fahrenheit - 32) * 5 / 9.
Instructions:
Let's display our conversions.
Tasks:
1.- Create a display statement that shows the string Temperature conversions.
2.- Create a display statement that shows a string to make the text more readable, such as:
-----------------------
Instructions:
Next:
Tasks:
1.- Create a display statement that displays the fahrenheit variable joined with the string " degrees Fahrenheit are:".
2.- Create a display statement that displays the fahrenheitToCelsius variable joined with the string " degrees Celsius".
The output should look like this:
Distance conversions
 ----------------------- 
40 kilometers are: 
24.854847689493358 miles
---- 
24 miles are: 
38.624256 kilometers   
Temperature conversions 
----------------------- 
41 degrees Fahrenheit are:
5 degrees Celsius
Instructions:
Now let's display celsiusToFahrenheit.
Tasks:
1.- Create a display statement that displays ---- in the console. Make sure to add it as a string between parentheses.
2.- Copy and paste the two display statements that join the fahrenheit and fahrenheitToCelsius variables to strings.
3.- Inside the newly pasted display statements turn the fahrenheit variable into celsius.
4.- Turn the " degrees fahrenheit are:" string into " degrees celsius are:".
5.- Turn fahrenheitToCelsius into celsiusToFahrenheit and the celsius string to fahrenheit.
---------------------------------------------------------------------------------------------------------
*/
let miles = 24;
let kilometers = 40;
let number = 1.609344;
let kilometersToMiles = kilometers / number;
let milesToKilometers = miles * number;

console.log("Distance conversions");
console.log("-----------------------");
console.log(kilometers + " kilometers are:");
console.log(kilometersToMiles + " miles");
console.log("----");
console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
console.log("\n");

let celsius = 5;
let fahrenheit = 41;
let celsiusToFahrenheit = (celsius * 9 / 5) + 32;
let fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;

console.log("Temperature conversions");
console.log("-----------------------");
console.log(fahrenheit + " degrees Fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees Celsius");
console.log("----");
console.log(celsius + " degrees celsius are:");
console.log(celsiusToFahrenheit + " degrees fahrenheit");
console.log("\n");

let libra = 167;
let kilogramo = 76;
let number2 = 2.20462;
let libraAKilogramo = libra / number2;
let kilogramoALibra = kilogramo * number2;

console.log("Conversiones de peso");
console.log("-----------------------");
console.log(libra + " libras son:");
console.log(libraAKilogramo + " kilogramos");
console.log("----");
console.log(kilogramo + " kilogramos son:");
console.log(kilogramoALibra + " libras");