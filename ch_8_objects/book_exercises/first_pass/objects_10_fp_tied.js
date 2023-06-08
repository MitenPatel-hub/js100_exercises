/* How many primitive values are there in the following expression? Identify them. 
How many objects are there in the expression? Identify those objects. 

[1, 2, ["a", ["b", false]], null, {}]

Primitive Values:

6 total primitive values

// 1
// 2
// null
// "a"
// "b"
// false

Objects:

4 total objects

// {}
// [1, 2, ["a", ["b", false]], null, {}]
// ["a", ["b", false]]
// ["b", false]


Model Solution:

There are 6 primitive values and 4 objects. The outermost set of brackets defines 
an array (an object) that contains 5 elements. The elements with values 1, 2, and 
null are all primitive values, while ["a", ["b", false]] is a nested array, and {} 
is nested object. The nested array has 2 elements, one of which is a primitive value 
("a"), while the other is yet another nested array. Finally, this innermost array 
contains two elements, "b" and false, both of which are primitive values.*/