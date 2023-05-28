/* Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

1. thousands place is 4
2. hundreds place is 9
3. tens place is 3
4. ones place is 6 

My solution is below:*/

let thousands = parseInt(4936 / 1000);
console.log(`thousands: ${thousands}`);

let hundreds = parseInt(4936 / 100 % 10);
console.log(`hundreds: ${hundreds}`);

let tens = parseInt(4936 % 100 / 10);
console.log(`tens: ${tens}`);

let ones = parseInt(4936 % 10);
console.log(`ones: ${ones}`);

/* Model Solution is better because it is more elegant, procedural, and reusable. 
It progressively reduces the original number by dividing by 10 and taking the floor, extracting each digit as it goes:

1. It starts by getting the remainder of 4936 when divided by 10 to get the ones digit.
2. It then subtracts the ones digit and divides by 10 to get the new number (493).
3. It repeats this process to get the tens, hundreds, and thousands digits.

Model solution is a general method for extracting digits from a number of any size, not just a 4-digit number.

Model Solution is below:

> let number = 4936;
> let ones = number % 10;
> ones
= 6
console.log(`ones: ${ones}`);

> number = (number - ones) / 10
= 493

> let tens = number % 10;
> tens
= 3
console.log(`tens: ${tens}`);

> number = (number - tens) / 10
= 49

> let hundreds = number % 10;
> hundreds
= 9
console.log(`hundreds: ${hundreds}`);

> let thousands = (number - hundreds) / 10;
> thousands
= 4 
console.log(`thousands: ${thousands}`); */