/* In the code shown below, identify the following items:

the function arguments
the function body
the function declaration
the function invocation
the function name
the function parameters
the function return value
the names of all variables in this program */

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

/* My Answer:

// function arguments

2, 3, 4

// function body

{
  let result = num1 * num2 * num3;
  return result;
}

// function declaration

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

// function invocation

multiplyNumbers(2, 3, 4)

// function name

multiplyNumbers

// function parameters

num1, num2, num3

// function return value

24

// names of all variables in this program 

multiplyNumbers
num1, num2, num3 
result
product

let product = multiplyNumbers(2, 3, 4);

Model Answer:

The function name is multiplyNumbers.

The function arguments are the values 2, 3, and 4 between the parentheses on 
line 6. The function parameters are num1, num2, and num3 on line 1.

The function body consists of everything between the { on line 1 and the } on 
line 4. It doesn't matter whether you include or exclude the braces as part 
of your answer.

The function declaration is everything on lines 1-4. The function invocation 
is multiplyNumbers(2, 3, 4) on line 6.

The function's return value is determined by multiplying the arguments together. 
That value is initially stored in the local variable result in the function's 
body. It gets assigned to product after the function returns.

This code's complete list of variables includes multiplyNumbers, num1, num2, 
num3, result, and product. In particular, the function name and its parameters 
are all variables. In this case, multiplyNumbers is a global variable, but num1, 
num2, and num3 are local variables defined inside the function.
*/