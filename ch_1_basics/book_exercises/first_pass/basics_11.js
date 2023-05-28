/* What value does the following expression evaluate to?

parseInt('3.1415') 

The above expression should evaluate to 3. parseInt being called on the string '3.1415' will cause the
JavaScript interpreter to convert the string into a Number and extract an integer from the float number
3.1415. Once the interpreter detects the '.' float following the integer 3, it will stop evaluating
(or parsing) the value and return only what was evaluated prior to the '.' float, in this case 3. */

console.log(parseInt('3.1415'));

/* Model Solution: 

It evaluates to 3. parseInt converts strings that begin with a digit to their numeric equivalent. 
If it encounters a non-digit such as ., it stops converting. 
Thus, this example converts the 3 at the beginning of the string but ignores everything else. */
