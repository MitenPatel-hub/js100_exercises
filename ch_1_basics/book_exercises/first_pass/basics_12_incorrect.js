/* What value does the following expression evaluate to?

'12' < '9' 

Answer: 

The above expression evaluates to the boolean value true. Although '12' and '9'
are string values, the less than operator (<) that belongs to the Number constructor will
cause implicit type coercion, but not for all characters in a multi-character string like '12'. 
The interpreter will extract the first digit character in the string and then terminate its evaluation. 
This means the interpreter will read the expression as 1 < 9, which it would interpret as true and
accordingly return the boolean value true.*/

console.log('12' < '9');

/* Model Answer:

This question is a bit tricky: the expression evaluates as true since the operands are strings, not numbers. 
When you compare two strings, JavaScript performs a character-by-character comparison going from left to right, 
so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'

Had you used numbers instead, the expression would evaluate as false. */

