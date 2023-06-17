/* Using the code from Exercise 9, classify each variable name as 
either global or local. For our purposes here, you may assume that 
the code from Exercise 9 is the entire program. */

function multiply(left, right) {                               // multiply(g), left(l), right (l)
  let product = left * right;                                  // product(l), left(l), right(l)
  return product;                                              // product(l)
}

function getNumber(prompt) {                                   // getNumber(g), prompt(l)
  return parseFloat(question(prompt));                         // parseFloat(g), question(g), prompt(l)
}

let left = getNumber('Enter the first number: ');              // left(g), getNumber(g)
let right = getNumber('Enter the second number: ');            // right(g), getNumber(g)
console.log(`${left} * ${right} = ${multiply(left, right)}`);  // console(g), left(g), right(g), multiply(g)

/* Model Answer 

Global Variables: multiply, getNumber, left, right, console, parseFloat, question.
Local Variables: left, right, product, prompt

Function names are global variables unless those functions are defined as an object 
property or nested inside another function. Thus, multiply, getNumber, console, 
parseFloat, and question are all global variables in this program. In addition, 
function parameters and variables declared inside a function are always local variables. 
Thus, left, right, product, and prompt are all local variables.

In the next exercise, we'll see why left and right are both global and local variables. */


