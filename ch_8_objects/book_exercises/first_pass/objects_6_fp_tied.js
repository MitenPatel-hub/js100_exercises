// Which of the following values are primitive values? Which are objects? Which are neither?

"foo" // primitive
3.1415 // primitive
[ 'a', 'b', 'c' ] // object
false // primitive
foo // neither
function bar() { return "bar"; } // object
undefined // primitive
{ a: 1, b: 2 } // object

/* Model Solution:

Primitive Values

"foo"
3.1415
false
undefined
Strings, numbers, booleans, and undefined are all primitive values (as are null, bigints, and symbols).

Objects

[ 'a', 'b', 'c' ] (arrays are objects)
function bar() { return "bar"; } (functions are objects)
{ a: 1, b: 2 }

Neither

foo is an identifier. Identifiers are used to name things that have values, such as variables and functions, 
but they are not values by themselves. Thus, they are neither primitive values nor objects. */