/* Write a program named greeter.js that greets 'Victor' three times. 
Your program should use a variable and not hard code the string value 
'Victor' in each greeting. Here's an example run of the program:

$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.

My Answer 1 (String Interpolation):*/

let firstName = 'Victor';
console.log(`Good Morning, ${firstName}.`);
console.log(`Good Afternoon, ${firstName}.`);
console.log(`Good Evening, ${firstName}.`);

// My Answer 2 (.forEach Iterator): 

let greetingsArray = ['Good Morning', 'Good Afternoon', 'Good Evening'];

greetingsArray.forEach(greeting => console.log(`${greeting}, ${firstName}.`));

// My Answer 3 (Object literal w/ function declaration):

let victorGreetings = {
  nameKey: 'Victor', 
  morning: 'Good Morning',
  afternoon: 'Good Afternoon',
  evening: 'Good Evening',
  greetingsFunc: function(greeting) {
    console.log(`${this.morning}, ${this.nameKey}.`);
    console.log(`${this.afternoon}, ${this.nameKey}.`);
    console.log(`${this.evening}, ${this.nameKey}.`);
  }
}

victorGreetings.greetingsFunc();

// My Answer 4 (Object literal w/ function expression and assignment to Object key):

let victorGreetingsTwo = {
  nameKey: 'Victor', 
  morning: 'Good Morning',
  afternoon: 'Good Afternoon',
  evening: 'Good Evening',
  greetingsFunc: null,
}

victorGreetingsTwo.greetingsFunc = function(greeting) {
  console.log(`${this.morning}, ${this.nameKey}.`);
  console.log(`${this.afternoon}, ${this.nameKey}.`);
  console.log(`${this.evening}, ${this.nameKey}.`);
}

victorGreetingsTwo.greetingsFunc();