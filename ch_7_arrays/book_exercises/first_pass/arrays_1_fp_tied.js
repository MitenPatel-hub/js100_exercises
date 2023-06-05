// In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4]; // array1.length = 4
console.log(array1, array1.length);

let array2 = [1];
array2.length = 5; // array2.length = 5
console.log(array2, array2.length);

let array3 = [];
array3[-1] = [1]; // array3.length = 0
console.log(array3, array3.length);

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // array4.length = 3
console.log(array4, array4.length);

let array5 = [];
array5[100] = 3; // array5.length = 101
console.log(array5, array5.length);
