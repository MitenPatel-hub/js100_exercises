/* Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
}; 

My Solution:*/

let myProtoObj = { foo: 1, bar: 2 };
let myObj = Object.create(myProtoObj); // Model solution (identical): let myObj = Object.create(myProtoObj);
console.log(myObj);
console.log(myProtoObj);

