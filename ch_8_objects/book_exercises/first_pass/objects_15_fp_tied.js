/* Identify all of the variables, object property names, primitive values, and objects in the 
following code. This problem is even more challenging than the previous one. Note that some 
items in this program may appear in multiple categories. */

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/*
My Solution:

Variables (All correct):

// bar
// arg1, arg2
// foo
// qux
// result

Primitive Values (All correct):

// 'Hello'
// 'abc'; 'def'; 'ghi'; 'jkl'; 'mno'; 'pqr' (string literals as object property names)
// 1, 2, 3, 4, 5, 6
// 0, 1, 2 (numeric literals as indices for [4, 5, 6])
// 0, 1, 2, 3 (numeric literals as indices for [1, 2, 3, [4, 5, 6]])
// null
// NaN
// 'Victor', 'Antonina'


Objects (All correct):

// function bar(){}
// [1, 2, 3, [4, 5, 6]]
// [4, 5, 6]
// qux {}


Object Property Names (All correct): 

// abc; def; ghi; jkl; mno; pqr
// [0], [1], [2] (indices for [4, 5, 6])
// [0], [1], [2], [3] (indices for [1, 2, 3, [4, 5, 6]]) */