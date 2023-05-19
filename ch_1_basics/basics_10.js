/* What value does the following expression evaluate to?

'foo' === 'Foo' 

The above expression is a boolean expression using a strict equality operator ('===') as its comparison operator to 
evaluate if the data on both the left and right sides of the operator are of the same data type and hold the same value. 
The return should evaluate to false because 'Foo' has a capital letter while 'foo' begins with a lower case 'f'. This 
means that the two string values are different, not strictly equal. */

console.log('foo' === 'Foo');