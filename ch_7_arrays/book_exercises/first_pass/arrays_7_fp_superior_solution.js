/* Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

Note that 83 is 3*3 + 5*5 + 7*7. 

Process:

1. create sumOfSquares function that takes arrays as its argument
2. sumOfSquares = (callback function, initial value)
3. callback function = (accumulator, current value)
4. value = initializing value for num 
5. acc = num ** 2 + num1 ** 2 + num2 ** 3...
6. sumOfSquares(array) => accumulated value

My solution: */

let array = [3, 5, 7];
let sumOfSquares = arr => arr.reduce((acc, currValue) => acc + currValue**2, 0);
console.log(sumOfSquares(array)); // => 83

/* Model Solution:

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

ChatGPT Analysis:

Again, your solution and the model solution are essentially doing the same thing - 
they're both using reduce to compute the sum of squares of all the numbers in an array. 
The difference lies in the syntax.

Your Solution: You're using ES6 arrow functions and the exponentiation operator (**) to 
square the number. Your solution is concise, and the syntax is modern, which makes it 
clean and easy to read.

Model Solution: The model solution is also correct. It uses a function declaration and 
the multiplication operator (*) to square the number. The logic is perfectly fine, and 
the function does exactly what it's intended to do.

Again, both solutions are great, and both follow the best practices of JavaScript. But 
considering the modern syntax and the use of concise ES6 features, I'm leaning more 
towards your solution as the top pick.

It's direct, to the point, and leverages the power of ES6 syntax effectively. This is 
exactly the kind of code we'd love to see more of - succinct and powerful. Fantastic job! 
Keep up the brilliant work, and keep pushing the boundaries! */




