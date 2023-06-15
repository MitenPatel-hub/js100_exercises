/* Write a program named age.js that includes someone's age and then 
calculates and reports the future age in 10, 20, 30 and 40 years. 
Below is the output for someone 20 years old.

You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old. 

My Solution 1 (template literal): */

let age = 20;

console.log(`You are ${age} years old.`)
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

// My Solution 2 (for loop):

age_incrementer_for_loop:

console.log(`You are ${age} years old.`)
for (incrementer = 10; incrementer <= 40; incrementer+=10) {
  console.log(`In ${incrementer} years, you will be ${age + incrementer} years old.`);
}

// My Solution 3 (while loop):

let i = 10;

age_incrementer_while_loop:

console.log(`You are ${age} years old.`)
while (i <= 40) {
  let age = 20;
  console.log(`In ${i} years, you will be ${age + i} years old.`);
  i+=10;
}

// My Solution 4 (function w/ for loop):

function ageIncrement(age) {
  console.log(`You are ${age} years old.`)
  for (incrementer = 10; incrementer <= 40; incrementer+=10) {
    console.log(`In ${incrementer} years, you will be ${age + incrementer} years old.`);
  }
}

ageIncrement(20);

// My Solution 5 (function w/ while loop):

function ageIncrementTwo(age) {
  console.log(`You are ${age} years old.`)
  let i = 10;
  while (i <= 40) {
    let age = 20;
    console.log(`In ${i} years, you will be ${age + i} years old.`);
    i+=10;
  }
}

ageIncrementTwo(20);