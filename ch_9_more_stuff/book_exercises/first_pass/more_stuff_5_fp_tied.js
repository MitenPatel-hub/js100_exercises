// What does the following function do?

function doSomething(string) {
  return string.split(' ') /* The string value assigned to the parameter var string will be split into multiple string values that 
  will exist as elements in a new array using the .split String method; the splits will occur wherever JavaScript detects 
  empty space characters, ' ' */
               .reverse() // The .reverse Array method will sort the array's elements in reverse order 
               .map((value) => value.length); /* Using the array as a caller, the .map Array method will pass the array's element 
               values as arguments into an anonymous callback function that will calculate the character length of each array element 
               and map those length values into a new array */
}


/* Model Answer:

This code converts a string into an array of words, reverses that array, and then returns a new array that contains the lengths of the 
words. It assumes that a single space character delimits the words in the original string.

console.log(doSomething("Pursuit of happiness")); // => [ 9, 2, 7 ] */
