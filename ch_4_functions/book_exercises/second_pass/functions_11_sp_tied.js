/* Using the code from Exercise 9, are the left and right variables on 
lines 1 and 2 the same as the left and right variables on lines 10-12? 
Explain your reasoning. 

Answer 1:

The left and right variables on lines 1 and 2 are not the same as the left 
and right variables on lines 10-12.

1. The left and right variables on lines 10-12 are globally scoped variables.
2. The left and right variables on lines 1 and 2 are locally scoped variables 
that have function scope within function multiply.
3. The left and right variables on lines 1 and 2 are shadow variables. Whatever
is done with those variables within function multiply will be hidden from the
global left and right variables on lines 10-12.

Answer 2:

They are not the same variables.

The left and right variables declared on lines 10 and 11 are a little tricky. 
First, though they have the same names as the parameters defined for the multiply 
function, they are not the same variables. (The function parameters shadow the 
variables on lines 10 and 11.) Furthermore, they are global variables even though 
they are only accessible on line 12 (technically, left is also accessible on line 
11 but is not used). They are considered global because they are defined at the 
topmost level of the program.

The left and right parameters on line 1 are local variables since function parameters 
are always local to the function. Thus, line 2 refers to the local variables.
*/