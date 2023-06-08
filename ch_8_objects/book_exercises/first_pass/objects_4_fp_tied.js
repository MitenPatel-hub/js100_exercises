/* Create an array from the keys of the object obj below, with all of the keys 
converted to uppercase. Your implementation must not mutate obj.

The order of the array does not matter. 

My Solution: */

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let objKeysUpper = objKeys.map(letter => letter.toUpperCase());
console.log(objKeysUpper);
console.log(obj);

/* Model Solution (identical):

let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 } 

The challenge of this exercise is to figure out how to iterate through the 
properties of obj. We showed two ways in this chapter: for/in with hasOwnProperty() 
and Object.keys(). The former involves a bit more work, so we use Object.keys() 
combined with map() to extract and uppercase the keys into an array.

We can also use forEach, though it requires a bit more effort:

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let upperKeys = [];
let objKeys = Object.keys(obj);
objKeys.forEach(key => upperKeys.push(key.toUpperCase()));

console.log(upperKeys); // => [ 'B', 'A', 'C' ]  */