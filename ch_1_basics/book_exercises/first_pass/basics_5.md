Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

console.log('5' + 10); => console.log(Number('5') + 10);

Above, the righthand solution is refactored to convert the string '5' to a Number data type using
the global function Number() with '5' being passed as the argument to call it. 
Then, console.log() is written to log the result of adding the return of Number('5') to 10. 

Below, the book presents an alternate solution option:

console.log(parseInt('5', 10) + 10);