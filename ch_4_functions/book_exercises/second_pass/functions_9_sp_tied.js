/* Identify all of the variables named on each line of the following code. 
You may assume that question is the name of a built-in function in JavaScript 
(it is not, so this code won't work as written).*/

function multiply(left, right) {                               // multiply, left, right
  let product = left * right;                                  // product, left, right
  return product;                                              // product
}

function getNumber(prompt) {                                   // getNumber, prompt
  return parseFloat(question(prompt));                         // parseFloat, question, prompt
}

let left = getNumber('Enter the first number: ');              // left, getNumber
let right = getNumber('Enter the second number: ');            // right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`);  // console, left, right, multiply

/* Model Answer: 

Line 1: multiply, left, right: The function name and the parameter names are all variable names.
Line 2: product, left, right
Line 3: product
Line 6: getNumber, prompt
Line 7: parseFloat, question, prompt. This one is a little tricky. parseFloat is an actual built-in 
function in JavaScript; we are pretending that question also is a built-in function. As such, we know 
that both parseFloat and question are variable names.
Line 10: left, getNumber
Line 11: right, getNumber
Line 12: console, left, right, multiply: console.log is a little tricky here. console is the variable 
name for the built-in Console object. In contrast, console.log is the name of a method in that object. 
As such, log is a property name, not a variable name.
*/