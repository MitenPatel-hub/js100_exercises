// Given a list of numbers, write some code to find and display the largest numeric value in the list.

let listOne = [1, 6, 3, 2];
console.log(Math.max(...listOne));
let listTwo = [-1, -6, -3, -2];
console.log(Math.max(...listTwo));
let listThree = [2, 2];
console.log(Math.max(...listThree));

/* Model Answer:

console.log(Math.max(1, 6, 3, 2));      // => 6
console.log(Math.max(-1, -6, -3, -2));  // => -1
console.log(Math.max(2, 2));            // => 2 */