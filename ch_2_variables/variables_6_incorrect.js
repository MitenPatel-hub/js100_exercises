/* Will this program produce an error when run? Why or why not?

Answer: 
I predict that the program will not produce an error when run.
The variable's value of 'bar' will print onto the terminal.
Constant FOO was declared in the global scope and console.log(FOO)
was also expressed in the global scope.*/


const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* Model Answer:

For much the same reason as the previous exercise, this program doesn't 
raise an error, and it logs bar on line 6. One key difference, though, is 
that we are using const instead of let, which may have led you to believe 
an error would occur on line 3. However, since the two const variables are 
separate entities -- that is, the declaration on line 3 declares a completely 
new constant -- no error occurs.

Analysis:

I answered the problem correctly. However, I am marking it as incorrect because
I did not answer the problem COMPLETELY. Without mentioning that Constant FOO
declared within the block scope creates a brand new FOO variable altogether, my 
answer fails to reflect an understanding that declaring a Constant in the global 
scope does not prevent the creation of a new Constant within a block scope that 
can have the same exact identifier as an outer, global scope Constant. Like with
exercise 5, the inner scope FOO shadows the outer scope FOO. My future answer
needs to explain this.*/

