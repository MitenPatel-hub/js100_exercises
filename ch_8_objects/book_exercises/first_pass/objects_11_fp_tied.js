/* Write some code to replace the value 6 in the following object with 606.
You don't have to search the object. Just write an assignment that replaces the 6.

My Solution:*/

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;

console.log(obj);

/* Model Solution: 

obj.bar[3].xyz = 606; // Option 1
obj["bar"][3]["xyz"] = 606; // Option 2
*/