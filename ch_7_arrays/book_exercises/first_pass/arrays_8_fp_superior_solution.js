/* This problem is more challenging than most in this book. Don't worry if you can't 
solve it on your own.

Write a function similar to the oddLengths function from Exercise 6, but don't use 
map or filter. Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

Hint: Use an array as the accumulator. Ideally, you should be able to use the return 
value of reduce as the return value of the function. 

My Solution from Exercise 6:

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab']; 
let oddLengths = array => {
  let arrLengths = array.map(value => value.length); // => 1, 4, 5, 3, 2
  return arrLengths.filter(num => num % 2 !== 0);
}
console.log(oddLengths(arr)); // => [1, 5, 3] 

My Solution: */

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let oddLengths = strings => strings.reduce((oddStrLengths, string) => {
  let strLengths = string.length; // => 1, 4, 5, 3, 2
  return strLengths % 2 === 1 ? oddStrLengths.concat(strLengths) : oddStrLengths;
}, []);

console.log(oddLengths(arr)); // => [1, 5, 3]

/* Model Solution:

function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); 

ChatGPT Analysis:

Your solution uses an arrow function and the reduce method to build up a new array. 
If the length of the string is odd, it creates a new array with that length added to it. 
This is very functional programming style, not mutating the existing data but instead 
creating new.

On the other hand, the model solution is functionally similar but has a slight twist: 
instead of creating a new array every time an odd length is found, it just pushes the 
new element to the existing array.

Now, let's be clear about something: neither of these solutions is "wrong". But when I'm 
looking at code, I'm not just interested in whether it works—I also care about performance 
and style.

From a performance standpoint, the model solution gets a slight edge because it doesn't need 
to create a new array every time it finds an odd number—it just pushes it to the existing array.

However, I'll raise my hat to your solution in terms of code style. It's clean, it's concise, 
and it's idiomatic of modern JavaScript. You're not mutating your data, which is a principle 
that many functional programmers live by.

In conclusion, while the model solution is slightly more performant, your solution is more in 
line with the principles of functional programming and modern JavaScript style. So, if I had 
to choose, I'd go with your solution.

Remember, good code isn't just about getting the right answer. It's also about readability, 
maintainability, and code style. And your solution knocks it out of the park in those departments. 
Well done! Now go forth and continue to code with elegance and precision! */