/* Challenging Exercise: This exercise has nothing to do with this chapter. 
Instead, it uses concepts you learned earlier in the book. If you can't 
figure out the answer, don't worry: this question can stump developers 
with more experience than you have.

Earlier, we learned that Number.isNaN(value) returns true if value is the 
NaN value, false otherwise. You can also use Object.is(value, NaN) to make 
the same determination.

Without using either of those methods, write a function named isNotANumber 
that returns true if the value passed to it as an argument is NaN, false if 
it is not. 

My Answer:

let isNotANumber = value => {
  if (value !== Number(value)) {
    return true;
  } else {
    return false;
  }
} */
  
let isNotANumber = value => value !== Number(value) ? true : false;

console.log(isNotANumber(4));
console.log(isNotANumber('4'));
console.log(isNotANumber('cool'));
console.log(isNotANumber(false));
console.log(isNotANumber(true));
console.log(isNotANumber(undefined));
console.log(isNotANumber(' '));
console.log(isNotANumber(0));
console.log(isNotANumber(null));
console.log(isNotANumber(NaN));

/* Model Answer:

function isNotANumber(value) {
  return value !== value;
} 

This works since NaN is the only JS value that is not === to itself. */