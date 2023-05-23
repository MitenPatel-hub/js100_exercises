/*What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); 

Answer:

I predict that the above code will log 1 to the console for the following reasons:

1. `let bar = 1` is declared in the global scope and the `console.log(bar)` method call occurs in the same global scope.
2. The function definition of `foo()` declares a new shadow variable `bar` with the `let` keyword. Global `bar` will
not get reassigned when `foo()` is invoked prior to the `console.log(bar)` method call. 
3. The console will not display `function foo()`'s shadow `bar` value of 2 when foo() is invoked because its function 
definition does not include a `console.log(bar)` or any other type of print to console statement for 
shadow variable `bar`. */

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* I was correct. 

Sidenote (Hypothetical): 

IF foo()'s function definition were written as `bar = 2` instead of `let bar = 2`, the console would have printed 2 instead 
of 1. The `foo()` function was declared in the global scope, so its invocation on line 28 would have reassigned `bar`'s value 
from 1 to 2 in accordance with the function defintion's reassignment of `bar = 2`.*/