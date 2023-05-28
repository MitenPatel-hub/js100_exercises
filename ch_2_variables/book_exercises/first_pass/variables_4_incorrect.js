/* What happens when you run the following code? Why?

I predict that the 3 console.log() expressions involving const NAME = Victor 
will execute correctly. I do want to note that I am unsure whether NAME
should be entirely capitalized since 'Victor' is not configuration data or
a magic number. Nevertheless, I don't think that will impact the interpreter's
ability to read, evaluate and print the code. I jsut want to note it because it may
be poor JavaScript style. 

Regarding the 3 console.log() expressions involving NAME = 'Joe', I predict that
the interpreter will output a ReferenceError for line 20 stating that NAME is not
defined. The interpreter will stop the program from running any further past that point.*/

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

/*I ended up being partially correct. Interpreter outputted "TypeError: Assignment to 
constant variable." This completely makes sense since NAME was defined when it was assigned
'Victor'. The issue is obviously one of variable assignment, not variable declaration.
I should have thought that through more carefully and will need to redo this problem later.
I already knew that the error an error would occur because Constants cannot be reassigned.
Yet, I still stupidly wrote that the error would have language regarding "Name is not defined"
rather than language involving assignment. This was very stupid on my part.*/