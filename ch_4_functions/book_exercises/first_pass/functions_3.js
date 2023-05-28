/* Write a program that uses a multiply function to multiply two numbers and returns the result. 
Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566 

My Solution: */

getNumber = (prompt) => {
  let rlSync = require('readline-sync');
  let inputNumber = rlSync.question(prompt);
  return parseFloat(inputNumber);
};

let number1 = getNumber('Enter the first number: ');
let number2 = getNumber('Enter the second number: ');

multiply = (number1, number2) => { 
  return number1 * number2;
};

console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);

/* Model Answer:

function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`); */
