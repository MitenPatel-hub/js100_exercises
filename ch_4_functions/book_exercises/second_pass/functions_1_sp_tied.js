/*What does this code log to the console? Does executing the 
foo function affect the output? Why or why not?*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); 

/* My Answer: 

The code will log 1 to the console. Executing the foo function on line 6
does not affect the console output because the block-scoped bar variable
inside the foo function is not passed to a console.log function within foo's
block scope. 1 will print because console.log(bar) is executed in the same 
global scope that let bar = 1 was declared in.

Model Answer:

The code logs 1 to the console. foo doesn't affect the value assigned to bar 
on line 1 since JavaScript functions create an inner scope. Thus, the bar 
variable on line 3 is not the same as the one on line 1. In the end, foo() 
has no bearing on the final output.

Compare this result to the following code:

let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);

In this case, console.log would log 2 since bar on line 1 is now in scope 
within the function. Thus, line 3 changes the global variable bar to 2.
*/