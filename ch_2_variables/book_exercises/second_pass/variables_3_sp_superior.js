// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

/* My Answer: 

I predict that JavaScript will output a ReferenceError stating that the variable
foo is undefined. foo was defined with the let keyword in a block. let variables
have block scope. Since console.log(foo) was executed in the global scope, JavaScript
is unable to reference that block-scoped variable. The scope of foo in this code
ends at line 3.

Model Answer:

The program outputs an error since foo is out of scope: the let statement creates 
variables with block scope, which limits the visibility of the variable to the block. 
Even though console.log(foo) comes after the declaration and initialization of foo, 
we still get an error since we declared foo inside the block. Outside the block, foo 
doesn't exist.

I consider my answer slightly better because I specified the type of error that would
be outputted.
*/