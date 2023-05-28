/* In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. 
Add a function to this program that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. Use the return values to greet the user 
with their full name.*/

let fullName = () => {
  let firstName = prompt('What is your first name?\n');
  let lastName = prompt('What is your last name?\n');
  console.log(`Hello, ${firstName} ${lastName}!`);
};
  
fullName();

/* Corrected Version:

function getName(namePrompt) {
  let name = prompt(namePrompt);
  return name;
};

function getFullName() {
  let firstName = getName('What is your first name?\n');
  let lastName = getName('What is your last name?\n');
  return { firstName, lastName };
};
  
function fullNameGreeting() {
  let { firstName, lastName } = getFullName();
  console.log(`Hello, ${firstName} ${lastName}!`);
};

fullNameGreeting();
