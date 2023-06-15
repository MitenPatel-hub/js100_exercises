// Explain why this code logs '510' instead of 15.

console.log('5' + 10); 

/* My Answer: 

In addition operations involving both a string and number, JavaScript implicitly 
coerces the number into a string value and then concatenates that coerced value
into the other string value.

Model Solution:

The code logs 510 since every + expression that has a string operand produces a 
string result no matter what the other operand is. In other words, the Number 10 
gets coerced to a String and then gets concatenated to the String '5', which produces 
'510'.
*/