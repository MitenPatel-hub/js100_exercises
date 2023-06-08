/* Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the 
following code snippets:

Snippet 1

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

Snippet 2

for (let key in myObj) {
  console.log(key);
}

Without running this code, can you determine whether these two snippets produce the same output? Why? */

let myProtoObj = { foo: 1, bar: 2 };
let myObj = Object.create(myProtoObj); 
myObj['qux'] = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key); // => prints 'qux'; Object.keys returns the object's own keys, not keys it inherits from its prototype
});

for (let key in myObj) {
  console.log(key); 
  /* => prints 'qux', 'foo', 'bar'; for/in loops iterate over both the object's key's and the ones it inherited; you can only 
  avoid this by including the built-in .hasOwnProperty object method on myObj in an if/then conditional block */
}

/* Model Solutions (identical): 

Both snippets iterate over the keys of myObj. However, for..in iterates over all of the object's keys, including those in the 
prototype object, myProtoObj. Thus, snippet 2 logs:

qux
foo
bar

Snippet 1 iterates solely over myObj's "own" properties - that is, those defined directly on the object, not its prototype. 
Thus, it logs:

qux

We can add a conditional to snippet 2 to get the same output from for..in: all we need to do is check whether the key is 
myObj's own property:

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
} */