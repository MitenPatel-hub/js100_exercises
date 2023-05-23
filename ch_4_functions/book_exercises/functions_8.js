/* Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

Answer:

I predict the code will output:

42
3.1415

The function will terminate once the first 2 arguments are read/evaluated/printed
because only 2 parameters are specified for function foo.*/

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);