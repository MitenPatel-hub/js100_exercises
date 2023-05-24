/* Write a function, evenOrOdd, that determines whether its argument 
is an even number. If it is, the function should log 'even' to the console; 
otherwise, it should log 'odd'. For now, assume that the argument is always 
an integer. */

let rlSync = require('readline-sync');
let numberPrompt = rlSync.question('Enter an integer: ');
let integer = parseInt(numberPrompt);

let evenOrOdd = (integer) => {
  if (integer % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(integer);