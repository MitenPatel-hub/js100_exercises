/*What does this program log to the console? Why?

Answer: 

I predict the program will log 'bar' to the console. While it is true that
variables that are declared in the outer scope are accessible from within an
inner scope, the outer scope variable will pass by value within the inner scope,
not by reference. Here, 'foo' was declared in the outer, global scope with a value 
of 'bar'.

This means that reassigning the variable in the inner scope will not reassign its 
in memory. Variable foo's reference to 'bar' in the computer memory will not 
change. Since `foo` can pass by value, it is possible to output 'qux' in the 
inner scope by executing `console.log(foo)` within the inner scope, on the line 
after `let foo = 'qux'.

However, in this code, `console.log(foo)` is entered in the outer, global scope.*/

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/* Model Answer:

Line 1 initializes a variable named foo with the value 'bar'. Line 2 starts a block, 
which creates a new scope for let variables. The variable on line 1 is still visible 
at this point, but line 3 declares a new variable named foo that shadows (hides) the 
variable from line 1. This second variable gets initialized to 'qux', but it goes out 
of scope on line 4 when the block ends. That brings foo from line 1 back into scope, 
so line 6 logs its value: bar.*/

/* Analysis:

I need to redo this problem. It's like my thinking was in the right direction but there
are serious errors in the way I processed the problem and applied the concept of pass-by-value, 
which is relevant to functions, not variable assignment. The focus here is on how the `let` 
keyword created a new scope within the block and that new `foo` variable within the block is a 
different variables that "shadows" the `foo` variable that was initialized with 'bar' as its 
value in the outer scope.

Outer `foo` isn't being passed into the block. A new `foo` is simply declared within the block.
When I redo this problem, my new answer should not discuss reassignment at all. Reassignment is 
a misapplication of that concept and does not technically or accurately describe what is 
actually happening with the 2 separate `foo` variables in this problem. My new answer will also
need to mention that inner `foo` falls out of scope when its block scope ends at the }->
console.log(foo) logs the value of outer `foo`.