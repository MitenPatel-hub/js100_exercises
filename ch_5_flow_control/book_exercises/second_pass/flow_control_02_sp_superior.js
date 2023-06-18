/* Write a function, evenOrOdd, that determines whether its argument is 
an even number. If it is, the function should log 'even' to the console; 
otherwise, it should log 'odd'. For now, assume that the argument is 
always an integer.

Solution 1 (not technically what the problem requires):*/

let evenOrOdd = value => value % 2 === 0 ? 'even' : 'odd';
console.log(evenOrOdd(6));

// Solution 2:

let evenOrOddTwo = value => {
  if (value % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
evenOrOddTwo(7);

// Solution 3 (what the Model Answer will probably expect):

function evenOrOddThree(value) {
  if (value % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOddThree(19);

// Model Answer:

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

/* ChatGPT Analysis:

Solution 1:

let evenOrOdd = value => value % 2 === 0 ? 'even' : 'odd';
console.log(evenOrOdd(6));

In this solution, you have a function evenOrOdd that uses the ternary 
operator to determine whether the input number is even or odd. If the 
number modulo 2 equals zero, it's even, and the function returns the 
string 'even'. Otherwise, it returns the string 'odd'. This function 
does just what you'd expect and does it well.

Afterward, you use console.log() to print the result of the evenOrOdd 
function when called with the argument 6. This is a correct approach and 
indeed separates the concerns of calculation and output.

Grade: 9/10.

I'm deducting 1 point only because the function doesn't handle any error 
case where the input might not be a number or an integer, which could be 
considered if you're looking for a foolproof function. But, given the problem 
specification that the function will always receive an integer, this function 
is perfectly valid.

In terms of simplicity, clarity, and functionality, I would recommend 
Solution 1 as the best choice among these three options. Here's why:

Solution 1 stands out due to its brevity and the use of the ternary operator, 
which results in clear and concise code. Furthermore, it separates the 
function's logic (calculating if a number is odd or even) from the output, 
which is a good practice.

While the other two solutions are perfectly fine, they use more lines of 
code to accomplish the same task. This isn't necessarily bad, but as a 
rule of thumb, it's generally better to prefer simplicity and clarity, 
assuming it doesn't compromise the code's readability or functionality.

Please remember that coding is often about making trade-offs and understanding 
the problem space. As long as the code is clear, maintainable, and functional, 
there isn't a strictly "correct" way to write it. Different solutions might be 
best in different contexts.
*/