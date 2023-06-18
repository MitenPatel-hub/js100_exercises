/*Let's improve our previous implementation of evenOrOdd. Add a validation 
check to ensure that the argument is an integer. If it isn't, the function 
should issue an error message and return. */

// Solution 1:*/

let evenOrOdd = value => {
  if (!Number.isInteger(value)) {
    console.log('Try again but make sure you are using an integer.');
    return;
  }

  if (value % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(17);

// Solution 2:

function evenOrOddTwo(value) {
  if (!Number.isInteger(value)) {
    console.log('Try again but make sure you are using an integer.');
    return;
  }

  if (value % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOddTwo(7);
  
// Solution 3:

let evenOrOddThree = value => {
  if (!Number.isInteger(value)) {
    return 'Try again but make sure you are using an integer.';
  } else {
    return value % 2 === 0 ? 'even' : 'odd';
  }
}

console.log(evenOrOddThree(8));

// Solution 4: 

function evenOrOddFour(value) {
  if (!Number.isInteger(value)) {
    return 'Try again but make sure you are using an integer.';
  } else {
    return value % 2 === 0 ? 'even' : 'odd';
  }
}

console.log(evenOrOddFour(18));


// Model Answer (matches my Solution 2):

function evenOrOddModel(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

/* ChatGPT Analysis: 

I appreciate your efforts in approaching this problem from different angles. 
The solutions are all valid, but some are more idiomatic or clean than others. 
As a professor who values clean, efficient, and idiomatic code, I'm going to 
evaluate them accordingly:

Solution 1 - Score: 8/10
This is a fine use of ES6 arrow function syntax, but the fact that it logs to 
the console instead of returning a value can make it less reusable. Console 
logs are great for debugging but in production code, it's generally more useful 
to return values.

Solution 2 - Score: 8/10
Very similar to solution 1 but uses a traditional function declaration. Again, 
good logic, but using console.log inside the function reduces its reusability.

Solution 3 - Score: 9/10
An excellent, compact solution that uses the ternary operator for brevity. It 
properly checks if the value is an integer and returns an appropriate response. 
Its use of ES6 arrow function syntax is modern and clean. Its use of return 
makes it a pure function, which is a function that given the same inputs, always 
returns the same output, and doesn't have any side effects. This is a very good 
practice in coding.

Solution 4 - Score: 9/10
Essentially the same as Solution 3 but with a traditional function declaration. 
It retains all the benefits of Solution 3.

All solutions use appropriate variable naming and follow good coding standards. 
Between Solutions 3 and 4, which are very similar and both get high marks, you 
should choose based on your coding style or the style of your team - whether you 
prefer arrow functions (solution 3) or traditional function declarations (solution 
4). Both are fine in modern JavaScript, but some teams may have a preference.
*/
