/* Write a function that takes a string as an argument and returns an all-caps 
version of the string when the string is longer than 10 characters. Otherwise, 
it should return the original string. Example: change 'hello world' to 'HELLO 
WORLD', but don't change 'goodbye'.*/

// My Solution 1:

let stringToUpperCase = string => string.length > 10? string.toUpperCase() : string;
console.log(stringToUpperCase('hello world'));
console.log(stringToUpperCase('goodbye'));

// My Solution 2: 

function stringToUpperCaseTwo(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string
  }
}
console.log(stringToUpperCaseTwo('hello world'));
console.log(stringToUpperCaseTwo('goodbye'));

// Model Solution (Matches My Solution 2):

function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

/* ChatGPT Analysis: 
These are both well-structured and correctly implemented solutions that solve 
the problem at hand. Let's grade them:

Solution 1 - Score: 9/10

This solution makes excellent use of the ES6 arrow function and the ternary 
operator to create a concise, readable piece of code. It meets the requirements 
perfectly. The choice of function name is also commendable; it is descriptive 
and makes the function's purpose clear. The only minor drawback is that it might 
be a little hard for beginners to read due to the compact form, but it's highly 
acceptable in modern JavaScript.

Solution 2 - Score: 8.5/10

This solution also gets the job done perfectly and uses a traditional function 
declaration along with a standard if/else control flow. It's extremely readable, 
even for people who are new to programming. The choice of function name is, again, 
well thought out.

The reason I'm giving it a slightly lower score is because it's a bit more verbose 
than it needs to be, given that JavaScript allows for more concise constructs 
(like the ternary operator used in Solution 1). However, this is a very minor 
point and more of a personal preference.

Both solutions follow good coding standards and practices. Between the two, I'd 
personally lean towards Solution 1 because of its efficient use of modern JavaScript 
features. However, either would be a great choice and ultimately, the right one for 
you would depend on the specifics of your project and team - such as whether you 
prioritize concise code, or whether you're working with a lot of beginners who might 
find the more verbose form easier to understand.

Model Solution 2:

function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

Chat GPT Analysis:

This solution also solves the problem quite effectively. Here is the evaluation:

Solution 3 - Score: 8.5/10

This solution works well. It takes a string as input, checks if the string's 
length is more than 10, and if so, it returns the uppercase version of the string. 
If not, it returns the original string. This solution is almost the same as the 
first one but uses a traditional function declaration instead of an arrow function.

The parentheses around the ternary operation are unnecessary in this case, but 
they don't negatively impact the code either. They may improve readability for 
some people.

As for the function name, while 'capsLong' is fairly descriptive, 'stringToUpperCase' 
might be a bit more clear, as it explicitly mentions the operation (converting to 
uppercase) and the data type it works on (string). However, 'capsLong' is by no means 
a bad choice, and function naming often comes down to personal preference and project 
conventions.

Remember, when writing functions, aim for clear, descriptive names, and try to ensure 
your function does one thing and does it well. These principles will make your code 
much easier to read, understand, and maintain.
*/