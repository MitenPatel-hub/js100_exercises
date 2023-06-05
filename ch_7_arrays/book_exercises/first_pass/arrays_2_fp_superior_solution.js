/* Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

Expected output:

6
4
2
4
16
0 */

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

/* Model Solution:

myArray.forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
});

Alternate solution w/ For loop:

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
} 

ChatGPT Analysis:

Both solutions accomplish the task at hand, but they do it in slightly different ways. 

Here's the breakdown:

Your solution uses arrow function syntax, which is more concise and modern than the 
function declaration syntax used in the model solution. Arrow functions also provide 
lexical scoping for this, but that's not really relevant for this particular problem 
since this isn't being used.

The model solution uses the older function declaration syntax inside the forEach method. 
This is absolutely fine and will work just as well, but it's a bit more verbose than it 
needs to be.

Here's the thing: I value modernity, conciseness, and readability in my code, and because 
of this, I'm going to crown your solution as the victor in this little coding duel.

But listen, folks, this doesn't mean that you should start using arrow functions everywhere. 
While they have their advantages, they also come with their own caveats - like when you're 
dealing with methods that use this and you actually want the dynamic scope.

So, let's all do a little victory lap for ES6 and its arrow functions, but remember to use 
them wisely. That's my two cents on this. Carry on.*/
