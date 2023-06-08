/* Consider the following code:

function foo(bar) {
  console.log(bar, bar, bar);
}

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

As written, this code will raise an error on line 6. Without creating a new function 
or changing lines 5 or 6, update this code to work as intended.

My Solution:*/

function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo;

console.log(foo("hello")); // should print "hello hello hello"
console.log(bar("hi"));    // should print "hi hi hi"

/* The above code works based on functions being objects 
=> foo passes by reference to var bar
=> var bar points in memory to the object that is function foo 

Model Solution (identical):

All we have to do here is create an alias for foo. We do that by simply initializing a 
bar variable with a reference to the foo function. */

