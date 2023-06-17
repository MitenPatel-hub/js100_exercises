// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

/* My Answer: 

The code should output 'Hello' and undefined. Variables that are not
explicitly initialized with values are given a default value of 
undefined in JavaScript. Here, since only one argument is passed to foo()
when invoked, JavaScript will pass undefined as the default value for
the parameter variable qux.

Model Answer:

The code will print:

Hello
undefined

The qux variable inside foo gets initialized to undefined when we fail 
to provide an explicit argument in the invocation.
*/
