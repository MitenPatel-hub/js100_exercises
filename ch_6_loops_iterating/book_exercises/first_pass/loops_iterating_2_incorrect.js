/* Write a function that computes and returns the factorial of a number by using a for loop. 
The factorial of a positive integer n, signified by n!, is defined as the product of all 
integers between 1 and n, inclusive:

n!	Expansion	Result
1!	1	1
2!	1 * 2	2
3!	1 * 2 * 3	6 => 3 * (3 - 1) * (3 - 2) * (3 - 0) => n * (n - 1)..
4!	1 * 2 * 3 * 4	24
5!	1 * 2 * 3 * 4 * 5	120
You may assume that the argument is always a positive integer.

Examples:

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

Correct answer:

function factorial(integer) {
  let result = 1; 
  for (let counter = integer; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result
}

console.log(factorial(4)); */

