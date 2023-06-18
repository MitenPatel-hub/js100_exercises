// Without running this code, what will it print?

console.log(false ?? null); // false
console.log(true ?? (1 + 2)); // true
console.log((1 + 2) ?? true); // 3
console.log(null ?? false); // false
console.log(undefined ?? (1 + 2)); // 3
console.log((1 + 2) ?? null); // 3
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null

/* Model Answer (identical): 

console.log(false ?? null);         // => false
console.log(true ?? (1 + 2));       // => true
console.log((1 + 2) ?? true);       // => 3
console.log(null ?? false);         // => false
console.log(undefined ?? (1 + 2));  // => 3
console.log((1 + 2) ?? null);       // => 3
console.log(null ?? undefined);     // => undefined
console.log(undefined ?? null);     // => null

Remember that ?? returns the second operand if the first operand is either 
null or undefined. In all other situations, it returns the first operand.
*/