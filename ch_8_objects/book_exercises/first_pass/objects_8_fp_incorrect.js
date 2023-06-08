/* Create a function that creates and returns a copy of an object. The function should 
take two arguments: the object to copy and an array of the keys that you want to copy. 
Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. 
If you do omit the argument, the function should copy all of the existing keys from the 
object. */

let objToCopy = { foo: 1, bar: 2, qux: 3 };


let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

/* Correct Solution:

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

  } else {
    return Object.assign(destinationObject, sourceObject);
  }

  return destinationObject;
}*/













/*
1. Need to create a function called use copyObj() that takes 2 parameters
2. Need to use Object.keys() to return an array of keys we can then assign to a variable keysArr
3. The parameters of the function need to accept key-value pairs as arguments (objToCopy, keysArr) 
4. The function can't mutate the objToCopy object 
5. The 2 arguments passed to the function must work together to access the property value of the key assigned to KeysArr
6. Function will need a default value for keysArr parameter to return copy of all existing keys in the object
7. The output should be an object literal, not an array => Object.assign({}, objA, objB)
8. Consider that an accumulator function may end up being relevant here */



 

