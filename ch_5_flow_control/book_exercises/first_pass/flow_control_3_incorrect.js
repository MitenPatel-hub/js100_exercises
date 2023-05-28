/* Let's improve our previous implementation of evenOrOdd. 
Add a validation check to ensure that the argument is an integer. 
If it isn't, the function should issue an error message and return.

My Solution: 

let rlSync = require('readline-sync');
let number = rlSync.question('Enter an integer: ');

let evenOrOdd = (number) => {
  if (number != parseInt(number)) {
    console.error('User input requires an integer');
  }
    else if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(number);

/* My Solution # 2:

let rlSync = require('readline-sync');
let numberPrompt = rlSync.question('Enter an integer: ');
let number = Number(numberPrompt);

let evenOrOdd = (number) => {
  if (number !== parseInt(number)) {
    console.error('User input requires an integer');
  }
    else if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(number);


Model Solution: */

let rlSync = require('readline-sync');
let number = rlSync.question('Enter an integer: ');

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('User input requires an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(number);