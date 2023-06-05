/* Let's try another variation on the even-numbers theme.

We'll return to the simpler one-dimensional array. In this problem, we want to use the map 
function to create a new array that contains one element for each element in the original 
array. If the element is an even value, then the corresponding element in the new array should 
contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

Example

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

Expected Output

[
  'odd', 'odd', 'even', 'odd',
  'even', 'even', 'even', 'odd',
  'odd', 'even', 'even',
]

If you have trouble using map to accomplish this, try it using a regular for loop instead. 

My Solution:*/

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let evenOrOdd = myArray.map(num => num % 2 === 0 ? 'even' : 'odd');

console.log(evenOrOdd);

/* Model Solution 1:

let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

Model Solution 2:

let newArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
}; 

ChatGPT Analysis:

Alright, let's get into it.

Your solution here is spot-on, and I'm quite pleased with it. You've demonstrated a solid 
understanding of JavaScript's Array.prototype.map function and the usage of the ternary 
operator, both of which are key tools in modern JavaScript development. Your solution is 
clean, efficient, and concise.

Why is it the best of the lot? Let's break it down:

Your Solution: The use of map in conjunction with a ternary operator makes the code concise 
and expressive. It's easy to understand what's happening: For each number, if it's even, map 
it to 'even'; otherwise, map it to 'odd'. Your solution is the most modern and elegant, taking 
full advantage of ES6 features.

Model Solution 1: This solution uses map like yours, but it opts for an if-else statement 
instead of a ternary operator. While this is perfectly fine, it's less concise. Given the 
simplicity of the logic involved (an element can only be 'even' or 'odd'), a ternary operator 
is the better choice.

Model Solution 2: This solution uses a traditional for loop. While it works, it's the least 
desirable of the three. It's more verbose and doesn't take advantage of the higher-order functions 
that JavaScript provides for array iteration, which makes the code less expressive. In addition, 
it's less performant because it needs to call Array.prototype.push for each iteration, which has a 
higher overhead compared to map.

So, hats off to you! Your solution is my top pick. It's concise, it's expressive, and it demonstrates 
a command of ES6 features. Keep up the good work! */