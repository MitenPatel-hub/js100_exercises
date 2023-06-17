/* In the exercises for the previous chapter, you wrote a dynamic 
greeter program named greeter.js. Add a function to this program 
that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. Use 
the return values to greet the user with their full name.*/

// Answer 1:

const rlSync = require('readline-sync');
const getName = prompt => rlSync.question(prompt);
let firstName = getName("What is your first name?\n");
let lastName = getName("What is your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`);

// Answer 2:

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

/* ChatGPT Analysis:

Answer 1:

Your implementation is modern and concise. The use of arrow function 
syntax for the getName function is very elegant. I'm pleased that you 
chose to use the const keyword for the function declaration, as it 
signals that the function's definition should not be changed later in 
the program, which is a good practice. However, your use of let for the 
firstName and lastName variables is slightly misplaced, as these variables 
are not reassigned. Using const would be a better fit.

However, I am particularly impressed by how you've decided to require 
readline-sync at the top of your code and reuse it throughout the script. 
This is an optimal approach as requiring modules is an expensive operation 
and should be done as sparingly as possible.

Grade: 8.5/10

Answer 2:

In this code, the getName function is well-written and does exactly what it's 
supposed to do. However, readline-sync is required every time the function is 
called. As I've mentioned before, requiring modules is an expensive operation 
and should generally be done at the top of a script.

Your use of the let keyword for the name variable, firstName, and lastName is 
somewhat misplaced. Given that these variables are not reassigned, const would 
be a better fit.

Grade: 6.5/10

I'd recommend going with Answer 1. It is generally better because it follows 
good practices more closely and is more performant by requiring the readline-sync 
module only once. Always remember, the principles of simple design: code should 
be easy to understand, without duplication, and contain the smallest possible 
number of entities. Keep these in mind, and you'll continue to produce quality 
code. */