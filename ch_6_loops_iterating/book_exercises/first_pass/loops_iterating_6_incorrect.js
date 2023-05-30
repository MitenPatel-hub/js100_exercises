/* Reimplement the factorial function from exercise 2 using recursion. Once again, you may 
assume that the argument is always a positive integer.

function factorial(integer) {
  let result = 1; 
  for (let counter = integer; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result
}

function factorial(integer) {
  do {
    factorial(integer) * factorial(integer - 1) 
  } while (integer > 0);
}

console.log(factorial(4));

Correct Answer: */

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

/*
=> return 5 * factorial(5 - 1) 
   === return 5 * factorial(4) 
    => return 5 * (4 * factorial(4 - 1))
     === return 5 * 4 * factorial(3) 
      => return 5 * 4 * (3 * factorial(3 - 1))
       === return 5 * 4 * 3 * factorial(2) 
        => return 5 * 4 * 3 * (2 * factorial(2 - 1))
         === return 5 * 4 * 3 * 2 * factorial(1) 
          => return 5 * 4 * 3 * 2 * (1)  */
        
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320 

