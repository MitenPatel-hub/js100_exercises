Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error? 

Answer: 

The JavaScript interpreter will not throw an error. It will log 'undefined' as the output of the console.log() statement and also returns a value of undefined.
The undefined value is a primitive data type and it represents the absence of a value. In this context, that specifically means that array element ([3]) does not exist in the array.


Model Answer:

No, there won't be an error. When you use an index value that has no corresponding element, JavaScript returns undefined, so line 3 logs undefined to the console.
