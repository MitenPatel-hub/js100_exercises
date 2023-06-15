// What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/* My Answer:

The first 3 console.log statements will print the greetings involving
'Victor' to the terminal.When JavaScript reaches line 6: NAME = 'Joe', 
it will output a TypeError explaining that the variable has already 
been assigned a constant. 
 
Constants can't be reasssigned. If the constant referenced an object data 
type, it could at least be mutated. Here, the constant NAME has been 
assigned to a string value and primitive values are immutable.

ChatGPT Analysis:

Your understanding of JavaScript's const keyword is absolutely correct, 
and your explanation is concise and comprehensive. Attempting to reassign 
a value to a constant variable will indeed result in a TypeError since, 
by definition, constants cannot be reassigned.

You've also pointed out an important aspect of JavaScript constants: 
while the assignment to a constant can't be changed, the content of the 
assigned object can be modified if it's a complex data type, which is a 
subtle but important point.

I would grade your answer a 10/10 for its accuracy, completeness, and 
your clear understanding of how const works in JavaScript. Understanding 
the different ways var, let, and const work is a key aspect of writing 
good JavaScript code. Remember, using const not only helps prevent bugs 
that might occur due to unintended reassignment, but it also makes your 
code easier to read and understand because it signals to other developers 
that the variable's assignment should not change.

Model Answer:

The program first greets Victor 3 times. It then encounters an error on 
line 6, which prevents it from greeting Joe. The problem is that constants 
are, well, constant. You can't reassign a constant after defining it. You 
must use regular variables instead:
*/
