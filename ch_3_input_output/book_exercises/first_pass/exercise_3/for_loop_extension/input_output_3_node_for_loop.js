/* This is a version of Exercise 3 using a for loop instead of 4 separate 
console.log statements. There are 2 options below. 

Option 1 (concise):

let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));

console.log(`You are ${age} years old.`);

for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}; 

*/

let rlSync = require('readline-sync'); // Option 2 (modular and reusable)

const askAge = () => {
  let inputAge = rlSync.question('How old are you?\n');
  inputAge = Number(inputAge);
  console.log(`You are ${inputAge} years old.`);
  return inputAge
};

const calcFutureAges = (ageToIncrement) => {
  for (let i = 10; i <= 40; i += 10) {
    console.log(`In ${i} years, you will be ${ageToIncrement + i} years old.`);
  }
};

let ageToIncrement = askAge();
calcFutureAges(ageToIncrement);
