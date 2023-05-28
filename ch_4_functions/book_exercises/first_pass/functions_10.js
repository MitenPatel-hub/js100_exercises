/* Using the code from Exercise 9, classify each variable name as either global or local. 
For our purposes here, you may assume that the code from Exercise 9 is the entire program.

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

Answer: 

multiply: global
left: local and global
right: local and global
product: local
getNumber: global
prompt: local
parseFloat: global
question: global
console: global

Model Answer:

Global Variables: multiply, getNumber, left, right, console, parseFloat, question.
Local Variables: left, right, product, prompt

Function names are global variables unless those functions are defined as an object 
property or nested inside another function. Thus, multiply, getNumber, console, parseFloat, 
and question are all global variables in this program. In addition, function parameters and 
variables declared inside a function are always local variables. Thus, left, right, product, 
and prompt are all local variables.

In the next exercise, we'll see why left and right are both global and local variables.*/

