/* Using the code from Exercise 9, are the left and right variables on lines 1 and 2 
the same as the left and right variables on lines 10-12? Explain your reasoning.

Answer:

No. The left and right variables on lines 1 and 2 are parameter variables that act 
as block or function scope local variables that are assigned the values of arguments that 
are passed to the function multiply. The left and right variables on lines 10-12 are 
global variables that do not have block scope limitation. They are able to reference other
global variables like the global getNumber function. They line 1 parameter variables shadow 
the left and right variables on lines 10-12.

Model Answer:

They are not the same variables. The left and right variables declared on lines 10 and 11 
are a little tricky. First, though they have the same names as the parameters defined for 
the multiply function, they are not the same variables. (The function parameters shadow the 
variables on lines 10 and 11.) Furthermore, they are global variables even though they are 
only accessible on line 12 (technically, left is also accessible on line 11 but is not used). 
They are considered global because they are defined at the topmost level of the program.

The left and right parameters on line 1 are local variables since function parameters are always 
local to the function. Thus, line 2 refers to the local variables. */
