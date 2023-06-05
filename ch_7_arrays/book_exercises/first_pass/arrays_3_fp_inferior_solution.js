/* Let's make the problem a little harder. In this problem, we're again interested in even 
numbers, but this time the numbers are in nested arrays in a single outer array.

My Solution 1:

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray[0].forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

myArray[1].forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

myArray[2].forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
}); 

My Solution 2:

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

function arraysEven(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
} 

arraysEven(myArray[0]);
arraysEven(myArray[1]);
arraysEven(myArray[2]); */

// My Solution 3:

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let arraysEven = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

arraysEven(myArray[0]);
arraysEven(myArray[1]);
arraysEven(myArray[2]);

/* Model Solution 1:

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];


for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}

Model Solution 2:

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
}); 


ChatGPT's Evaluation of all solutions:

In each of your solutions, you're hardcoding the indices of the myArray to process them 
separately. What if there are more nested arrays in myArray? What if the array size varies? 
What happens if a new array is added? You'd have to manually modify your code each time to 
accommodate those changes, which isn't a good practice.

Now, let's review the model solutions. The first model solution is a basic double loop. It 
does the job, but we can do better in terms of readability. The nested loop approach isn't 
as expressive as it could be, and it could be hard to follow, especially for developers who 
are new to the codebase.

The second model solution uses Array.prototype.forEach, and it's the superior approach in my 
view. The nested forEach method makes it abundantly clear that we're dealing with a nested array 
structure, which enhances readability. It also shows the power of higher-order functions in action, 
which is a central tenet of JavaScript.

It's also worth noting that the forEach method inherently handles the variation in the nested 
arrays' lengths, providing more flexibility. Plus, the use of the forEach method demonstrates 
that you understand and can leverage JavaScript's powerful functional programming capabilities.

Here's that model solution refactored to ES6 arrow syntax for conciseness:

myArray.forEach(nestedArray => {
  nestedArray.forEach(value => {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});

This is clean, scalable, and makes optimal use of JavaScript's features. As your resident CTO and 
JavaScript aficionado, this is the solution I endorse.*/