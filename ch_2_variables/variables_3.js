/* What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

I predict that the above program will output an error because the foo variable
is defined within a block and therefore has block scope limitation. The console.log()
expression exists in the global scope, so the interpreter will not be able to access
the foo variable within the console.log() expression. */

{
  let foo = 'bar';
}

console.log(foo);

/* I was correct because he output was a ReferenceError stating that foo is not defined.

Model Answer:

The program outputs an error since foo is out of scope: the let statement creates variables 
with block scope, which limits the visibility of the variable to the block. Even though 
console.log(foo) comes after the declaration and initialization of foo, we still get an error 
since we declared foo inside the block. Outside the block, foo doesn't exist.*/