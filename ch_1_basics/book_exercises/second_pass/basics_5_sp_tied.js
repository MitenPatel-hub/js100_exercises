/* Refactor the code from the previous exercise to use explicit coercion, 
so it logs 15 instead.

console.log('5' + 10);

My answer:*/

console.log(Number('5') + 10);

// Model Answers:

console.log(Number('5') + 10);
console.log(parseInt('5', 10) + 10);
console.log(parseInt('5') + 10); 

/* Explanation of radix in parseInt (MDN & ChatGPT):

The radix value would implicitly default to base-10 based on the numeric 
context as interpreted by JavaScript. If we left out the 10 and wrote 
parseInt('5') + 12, the code would still work as expected in this problem
because '5' is clearly a base-10 number and JavaScript defaults to base 10 
if the string does not start with '0x' (for hexadecimal, base 16) or '0' 
(for octal, base 8). Regardless, it is best practice to always specify the 
radix to prevent potential confusion or unexpected results when dealing with 
different JavaScript engines or user inputs.

For example, in older JavaScript engines, parseInt('010') would return 8 
because the leading zero was interpreted as indicating an octal number. In 
modern JavaScript engines, parseInt('010') will return 10 because octal 
literals are no longer recognized unless you specify the radix as 8 
(parseInt('010', 8)).

Thus, it's safer and more consistent to always specify the radix to ensure 
your code behaves as expected, regardless of the context.*/
