/* Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello'); 

Answer:

I think the output will be:

Hello
undefined

The function specifies 2 parameters but only 1 argument is passed to foo.
JavaScript will pass "undefined" as the argument for the 2nd parameter and
will therefore also output "undefined" for that parameted.*/

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello'); 