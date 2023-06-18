// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/* My Answer: 

The code should output 'Not Empty' to the console. Even though the array [] is empty,
it does not meet the requirements to be interpreted as a falsy value by JavaScript.
However, I prevent 2 alternative functions below to show how to rewrite the function
in the hypothetical scenario in which a programmer's intent is to output 'Empty' 
when an empty array like [] is passed as the argument to the function.

function isArrayEmpty(arr) {
  if (arr.length !== 0) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

function isArrayEmpty(arr) {
  if (arr.length === 0) {
    console.log('Empty');
  } else {
    console.log('Not Empty');
  }
}

isArrayEmpty([]);

Model Answer:

The output is Not Empty since, while the array is empty -- it has no elements and 
the length property is 0 -- it isn't falsy. Thus, JavaScript executes the first 
branch of the if statement.
*/