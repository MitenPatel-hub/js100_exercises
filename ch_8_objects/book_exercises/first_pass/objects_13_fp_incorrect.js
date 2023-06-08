/* Consider the following code. As written, this code will raise an error on line 5. 
Without modifying foo, update this code to print the desired text.*/

function foo(bar) {
  console.log(bar());
}

foo();    // Should print 'Welcome'
foo();    // Should print 3.1415
foo();    // Should print [1, 2, 3]


/* Model Solution:

function foo(bar) {
  console.log(bar());
}

foo(function() { return "Welcome" });
foo(function() { return 3.1415 });
foo(function() { return [1, 2, 3] });

Since foo expects a function argument (as indicated by the call to bar on line 2), we know 
we need to pass each invocation a function that returns the desired value. Thus, we define 
and pass functions that return "Welcome", 3.1415, and [1, 2, 3] in the three invocations.

My Remix of the Model Solution:

function foo(bar) {
  console.log(bar());
}

let welcome = () => 'Welcome';
let pi = () => 3.1415;
let arr = () => [1, 2, 3];

foo(welcome);    // Should print 'Welcome'
foo(pi);    // Should print 3.1415
foo(arr);    // Should print [1, 2, 3]
*/