/*Write a dynamic greeter program named greeter.js. The program should ask for 
your name, then output Hello, {name}! where {name} is the name you entered:

$ node greeter.js
What is your name? Sue
Hello, Sue! 

I am writing the program in this file, not one called greeter.js. */

let rlSync = require('readline-sync');
let personName = rlSync.question('What is your name?\n');
console.log(`Hello, ${personName}!`);

