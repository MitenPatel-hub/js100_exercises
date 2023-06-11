// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1; // 
array1[1] = 4; // array1 = [1, 4, 3] = array2
console.log(array2);  // => [1, 4, 3]

/* My Explanation:
 
Some variables pass by value because they point to primitive values that are 
stored within the same heap that has been allocated to that variable. Other 
variables, like array1, pass by reference because they point to an object that 
is being referenced by the variable's pointer and that object lives on a different 
memory slot. Arrays are objects, so array1 has a pointer that references array 
[1, 2, 3] on a different memory slot than the slot that var array1 is stored on.
array2 is then assigned to array1 so array1 will passs by reference to array2.

This means that array2 will have the same pointer value as array1 to reference 
the same object, [1, 2, 3]. array1 and array2 live on two different memory slots, 
but they both point to the same exact memory slot on which [1, 2, 3] lives on. 
Unlike primitive values which are immutable, an object value is mutable, meaning
its elements can be changed without altering the pointer value of the variable.
When 2 variables reference the same object in the heap, either variable can 
mutate the array, [1, 2, 3] here, reference object's atomic elements by reassignment, 
array1[1] in this case. 

array1[1] reassigns the element at index [1] of the array to the value of 4, which 
will mutate the array [1, 2, 3] to [1, 4, 3]. The mutation is on the object itself, 
not on the pointer values of array1 and array2, which remain unchanged. Therefore, 
when array1 mutates the array in this manner, the return value of array2 will also 
change to reflect this mutation because it array1 passed by reference to array 2 with 
let array2 = array1. array2 will return [1, 4, 3] just as array1 will. array2[1] = 4 
would have led to the same exact mutation for array1.

Model Answer:

The code outputs: [ 1, 4, 3]. This result demonstrates that array1 and array2 reference 
the same array: if we change an element using array1, it also changes that element in 
array2. The opposite is also true: if we change an element in array2, that also changes 
the element in array1.

This code also demonstrates that assignment of an array to another array doesn't create a 
new array, but instead copies a reference from the original array (array1 above) into the 
target array (array2). */
