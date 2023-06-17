/* Modify the greeter.js program to ask for the user's first and last 
names separately, then greet the user with their full name.

$ node greeter.js
What is your first name? Sue
What is your last name? Roberts
Hello, Sue Roberts!*/

let firstName = prompt("What is your first name?\n");
let lastName = prompt("What is your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`);