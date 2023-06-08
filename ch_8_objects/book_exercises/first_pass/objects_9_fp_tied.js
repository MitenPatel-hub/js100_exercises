// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
/* foo.a will be mutated to 'hi' because foo is an object and object properties can be mutated 
when passed as an argument to a mutating function */
  argument1.a = 'hi'; 
/* qux will be reassigned within this function scope but will not be mutated in the global scope 
because primitive values are immutable */
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // will log 'hi' since function bar mutated foo.a within its function scope
console.log(qux); /* will log 'hello' because the console.log() function occurs in the global scope
                     and the reassignment of qux within function bar does not carry into the global
                     scope */

/* Model Solution: 

The program logs 'hi' and 'hello' The reason behind this is that objects are mutable; strings and 
other primitives are not. Also, variable reassignment, such as that on line 10, doesn't mutate the 
original object even when the object is mutable. Thus, line 9 mutates the foo by assigning its a property 
to a new value ('hi'). Therefore, the code on line 15 logs hi. On the other hand, line 10 reassigns the 
argument2 variable, but it doesn't mutate the string represented by qux. Thus, line 16 logs hello: the 
original value of the qux variable. */