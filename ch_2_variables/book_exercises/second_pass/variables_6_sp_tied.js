// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* My Answer:

No, the program will not produce an error. It will print 'bar' to the terminal.

Although constant variables cannot be reassigned, it is permissible to create
other constant variables that possess the same identifier and shadow it. That is
what is done in this code. const FOO = 'qux' is a variable declaration statement
that creates a shadow variable called FOO within a block scope that hides (shadows)
its value from the globally-scoped constant variable FOO. The shadow variable FOO
goes out of scope when its block ends on line 4 of the code. At that point, 
global FOO that was declared on line 1 comes back into scope before console.log(FOO)
is evaluated on line 6.

ChatGPT Analysis:

Your answer is correct and well-explained. You correctly mentioned that the program 
will not produce an error and will log 'bar' to the console. You also accurately 
explained the concept of variable shadowing and how it applies to constants, which 
is key to understanding why the code works the way it does.

The program creates a new block-scoped FOO constant on line 3 that shadows the 
globally-scoped FOO constant on line 1. The console.log(FOO); on line 6 refers to 
the global FOO, not the block-scoped one, hence 'bar' is logged to the console.

Your explanation of the shadowing concept and why it leads to the specific output 
of 'bar' is excellent. It makes clear why the program behaves the way it does and 
does not produce an error.

Given this, I would rate your answer a 10/10. Good job!

Model Answer:

For much the same reason as the previous exercise, this program doesn't raise an 
error, and it logs bar on line 6. One key difference, though, is that we are using 
const instead of let, which may have led you to believe an error would occur on line 3. 
However, since the two const variables are separate entities -- that is, the 
declaration on line 3 declares a completely new constant -- no error occurs.
*/
