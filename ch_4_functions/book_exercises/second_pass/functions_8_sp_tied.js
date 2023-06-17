// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

/*My Answer: 

The output to the console will be:

42
3.1415

The third argument of 2.718 will be ignored by function foo. When more
arguments are provided in a function invocation than the number of 
parameters that are defined for that function, the function will not
read the extraneous argument during its execution.

Model Answer:

The 3rd argument to foo is ignored since the function definition only 
mentions two parameters.
*/