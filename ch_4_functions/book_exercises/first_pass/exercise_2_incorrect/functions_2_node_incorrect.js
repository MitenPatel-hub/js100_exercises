/* In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. 
Add a function to this program that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. Use the return values to greet the user 
with their full name.*/

// My Answer:

let rlSync = require('readline-sync');

let fullName = () => {
  let firstName = rlSync.question('What is your first name?\n');
  let lastName = rlSync.question('What is your last name?\n');
  console.log(`Hello, ${firstName} ${lastName}!`);
};
  
fullName();

/* Model Answer Version:

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name
};

let firstName = getName('What is your first name?\n');
let lastName = getName('What is your last name?\n');
console.log(`Hello, ${firstName} ${lastName}!`);


Combining My Version + Model Answer #1:

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name
};

function fullName() {
  let firstName = getName('What is your first name?\n');
  let lastName = getName('What is your last name?\n');
  console.log(`Hello, ${firstName} ${lastName}!`);
};
  
fullName();


Combining My Version + Model Answer #2:

let firstNamePrompt = 'What is your first name?\n'
let lastNamePrompt = 'What is your last name?\n'

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name
};

function fullName() {
  let firstName = getName(firstNamePrompt);
  let lastName = getName(lastNamePrompt);
  console.log(`Hello, ${firstName} ${lastName}!`);
};
  
fullName();


Combining My Version + Model Answer #3:

let firstNamePrompt = 'What is your first name?\n'
let lastNamePrompt = 'What is your last name?\n'

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name
};

function fullName() {
  let firstName = getName(firstNamePrompt);
  let lastName = getName(lastNamePrompt);
  return `Hello, ${firstName} ${lastName}!`;
};
  
console.log(FullName())


Combining My Version + Model Answer #4:

let firstNamePrompt = 'What is your first name?\n';
let lastNamePrompt = 'What is your last name?\n';

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
};

function getFullName() {
  let firstName = getName(firstNamePrompt);
  let lastName = getName(lastNamePrompt);
  return { firstName, lastName };
};
  
function fullNameGreeting() {
  let { firstName, lastName } = getFullName();
  console.log(`Hello, ${firstName} ${lastName}!`);
};

fullNameGreeting();