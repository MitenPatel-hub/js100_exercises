/* Write a function that takes a string as an argument 
and returns an all-caps version of the string when the 
string is longer than 10 characters. Otherwise, it should 
return the original string. Example: change 'hello world' 
to 'HELLO WORLD', but don't change 'goodbye'.*/

function stringCase(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  }
  else {
    return string;
  }
}

console.log(stringCase('hello world'));
console.log(stringCase('goodbye'));

/* Other Acceptable Solution:

function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(capsLong("Sue Smith"));     // => Sue Smith
console.log(capsLong("Sue Robertson")); // => SUE ROBERTSON
console.log(capsLong("Joe Thomas"));    // => Joe Thomas
console.log(capsLong("Joe Stevens"));   // => JOE STEVENS */