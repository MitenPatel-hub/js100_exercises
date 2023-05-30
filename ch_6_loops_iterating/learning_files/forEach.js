/*let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});

OR

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(name => console.log(name));*/


/* Refactoring names.js file:

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

names.forEach(name => upperNames.push(name.toUpperCase()));

console.log(upperNames);

OR

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

names.forEach(name => {
  let upperCaseName = name.toUpperCase();
  upperNames.push(upperCaseName);
})

console.log(upperNames);

OR, without pushing to a different array*/

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
names.forEach(name => console.log(name.toUpperCase()));
