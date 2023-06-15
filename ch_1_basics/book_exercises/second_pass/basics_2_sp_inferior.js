/*Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6 */

// My Solution:

let number = 4936;
let ones = number % 10;
console.log(`Ones place is ${ones}`);

let tens = (number - ones) % 100;
let tensDigit = tens / 10;
console.log(`Tens place is ${tensDigit}`);

let hundreds = ((number - ones) - tens) % 1000;
let hundredsDigit = hundreds / 100;
console.log(`Hundreds place is ${hundredsDigit}`);

let thousands = (((number - ones) - tens) - hundreds);
let thousandsDigit = thousands / 1000;
console.log(`Thousands place is ${thousandsDigit}`);

// Model Solution:

let onesModel = number % 10
console.log(`Ones place is ${onesModel}`);

number = (number - onesModel) / 10

let tensModel = number % 10
console.log(`Tens place is ${tensModel}`);

number = (number - tensModel) / 10

let hundredsModel = number % 10
console.log(`Hundreds place is ${hundredsModel}`);

let thousandsModel = (number - hundredsModel) / 10
console.log(`Thousands place is ${thousandsModel}`);

/* ChatGPT Analysis:

The logic you use is sound but seems overly complicated. The computation and assignment 
are done separately which adds unnecessary lines of code. The modulo operation is working 
as expected, and your logic in Solution 1 is indeed correct. The modulo operation gets 
the remainder of the number divided by 10, 100, and 1000 respectively which corresponds 
to the ones, tens, hundreds, and thousands places correctly.

Solution 1:

Correctness: 10/10
Simplicity: 7/10
Efficiency: 8/10

Your code is correct, but it's a bit harder to follow than Solution 2, since it involves 
extra variables and operations.

Solution 2:

Correctness: 10/10
Simplicity: 9/10
Efficiency: 10/10

Between the two, Solution 2 is simpler and more elegant. This is a simpler and more 
efficient approach to solving the problem. It correctly uses the property of integer 
division and modulo operation to extract individual digits from right to left. It's 
also advantageous because it doesn't require you to calculate and subtract the 
remainder at each step, and you aren't repeating the same process for each digit. 

There's a small area for improvement: remember to use semicolons at the end of your lines. 
Although JavaScript has automatic semicolon insertion (ASI), it's considered a good practice 
to include them yourself. This prevents any potential issues related to line breaks.

Remember, writing simple, concise, and readable code is not just for machines but for humans 
too. Keep up the good work!

My Solution Refactored to Match Model Solution:*/

let numberRefactor = 4936;
let onesRefactor = numberRefactor % 10;
console.log(`Ones place is ${onesRefactor}`);

numberRefactor = (numberRefactor - onesRefactor) / 10;

let tensRefactor = numberRefactor % 10;
console.log(`Tens place is ${tensRefactor}`);

numberRefactor = (numberRefactor - tensRefactor) / 10;

let hundredsRefactor = numberRefactor % 10;
console.log(`Hundreds place is ${hundredsRefactor}`);

let thousandsRefactor = (numberRefactor - hundredsRefactor) / 10;
console.log(`Thousands place is ${thousandsRefactor}`);