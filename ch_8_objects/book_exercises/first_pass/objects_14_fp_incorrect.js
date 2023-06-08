/* Identify all of the variables, object property names, primitive values, and 
objects shown in the following code (assume the code has not been executed). Don't 
panic if you miss a few items - this exercise is more challenging than it looks.*/

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

/* My Solutions:

Variables (All Correct):

// greeting (line 6)
// name (line 6)
// howdy (line 13)
// hello (line 5)
// foo (line 14)
// xyzzy (line 9)

Primitive Values (Missed a couple):

// ' ' (line 6)
// 1; 2; 3; 4; 5 (line 10)
// 'Hi' (line 13)
// 'Grace' (line 13)
// 'a'; 'b'; 'c'; 'd' (line 10) (did not include)(technically string literals)
// 0; 1; 2 (line 10) (did not include)(indices for [3, 4, 5]; technically numeric literals)

Objects (All correct):

// function hello (lines 5 to 7)
// function xyzzy (lines 9 to 11)
// { a: 1, b: 2, c: [3, 4, 5], d: {} } (line 10)
// [3, 4, 5] (line 10)
// {} (line 10)

Object Property Names (Missed a couple; included a couple that I shouldn't have):

// greeting (line 5) (Incorrect)(this is just parameter variable, nothing more)
// name (line 5) (Incorrect)(this is just parameter variable, nothing more)
// a; b; c; d (line 10)
// [0]; [1]; [2] (line 10) (did not include)(these indices correspond to [3, 4, 5]) */