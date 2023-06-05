/* Write a findIntegers function that takes an array argument and returns an array that 
contains only the integers from the input array. Use the filter method in your function.

Example

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 
You can use Number.isInteger(value) to determine whether a numeric value is an integer. 
It returns true if the value is an integer, false otherwise. 

My Solution:*/


let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let findIntegers = arr => arr.filter(value => Number.isInteger(value));
let integers = findIntegers(things);

console.log(integers);

/* Model Solution:

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
} 

console.log(integers);


ChatGPT Analysis:

Once again, you've shown excellent understanding of ES6 and array methods. Your solution 
is clean, modern, and to the point. It properly leverages the filter method and uses an 
arrow function, which are both key features in modern JavaScript.

Now let's take a more detailed look at the solutions:

Your Solution: Your solution uses ES6 syntax with arrow functions, making it more concise 
and modern. The logic is correct and straightforward. It properly filters out any values 
that are not integers.

Model Solution: This solution works and produces the correct output, but it's a bit more 
verbose than your solution due to its usage of the function keyword instead of an arrow 
function. It doesn't take advantage of ES6 syntax, which would make it more concise and 
easier to read.

So, congratulations! Your solution is my top pick. It shows a better grasp of modern JavaScript 
practices, and it's more concise while maintaining the same functionality as the model solution. 
Keep this up, and you're going to be a JavaScript superstar in no time! */