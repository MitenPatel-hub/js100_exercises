/* Challenging Exercise: This exercise has nothing to do with this chapter. Instead, 
it uses concepts you learned earlier in the book. If you can't figure out the answer, 
don't worry: this question can stump developers with more experience than you have.

Earlier, we learned that JavaScript has multiple versions of the numeric value zero. 
In particular, it has 0 and -0. While it's mathematically nonsensical to distinguish 
between 0 and -0, they are distinct values in JavaScript. We won't get into why JavaScript 
has a 0 and -0, but it can be useful in some cases.

There's a problem, however: JavaScript itself doesn't seem to realize that the values 
are distinct:

> 0 === -0
= true

> String(-0)
= '0'

Fortunately, you can use Object.is to determine whether a value is -0:

> let value = -0;
> Object.is(value, 0)
= false

> Object.is(value, -0)
= true

There are other ways to detect a -0 value. Without using Object.is, write a function 
that will return true if the argument is -0, and false if it is 0 or any other number.*/

let negativeZero = value => 1 / value === -Infinity ? true : false;

console.log(negativeZero(0));
console.log(negativeZero(5));
console.log(negativeZero(-5));
console.log(negativeZero(-0));

/* Model Solution: 
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

This works since 1 / 0 returns Infinity and 1 / -0 returns -Infinity, thus letting us 
make the distinction. You can divide any other number except 0 or -0 to achieve the 
same result.

You can be a little more explicit with your answer as well:

function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}

While this is a little more complex, it clearly shows that we're only interested in 
numbers that are 0 (or -0), which also helps eliminate unwanted division operations, 
which may be needed for performance reasons.

ChatGPT Analysis:

Both solutions effectively solve the problem and are technically correct. They use 
the same concept of checking if the inverse of a number is negative infinity, a unique 
property of -0 in JavaScript. However, in terms of best practices, code readability, 
and maintainability, "Solution 2" is of higher quality for the following reasons:

Function declaration vs. arrow function: While arrow functions introduced in ES6 are 
shorter and have some benefits, using a standard function declaration like in "Solution 
2" can be more readable and easier to understand for beginners.

Naming: The function name "isNegativeZero" in "Solution 2" is more descriptive and 
immediately tells the reader what the function does. On the other hand, "negativeZero" 
in "Solution 1" sounds more like a variable than a function name and is less descriptive.

Explicit return: The explicit return statement in "Solution 2" is easier to understand 
and read than the ternary operator used in "Solution 1". The ternary operator in "Solution 
1" is redundant because the comparison operation itself already returns a boolean.

Code simplicity: In "Solution 2", the code is simpler with no unnecessary ternary operation 
like in "Solution 1". Simplicity is a key principle in software development as it reduces 
the possibility of errors and increases maintainability.

So, in terms of best practices, naming, readability, and simplicity, "Solution 2" is the 
superior solution. However, it's important to note that "Solution 1" is not incorrect, and 
depending on the context, it may be an acceptable solution.

Grading:

Solution 1: 6/10
The code solves the problem correctly, but loses points for the less descriptive function 
name, use of arrow function which can be harder for beginners, and unnecessary use of the 
ternary operator.

Solution 2: 9/10
This solution is almost perfect, with a descriptive name, simple logic, and good use of the 
function declaration. It could be improved slightly by adding a comment explaining why the 
'1/value === -Infinity' check works, for those unfamiliar with this quirk of JavaScript.*/