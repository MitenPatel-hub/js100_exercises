Explain why this code logs '510' instead of 15.

console.log('5' + 10);

The above code logs the string '510' because when ever there is an operation involving a String data type + a Number data type,
implicit type coercion occurs. This means that the JavaScript interpeter converts the Number data type into a String and
concatenates it with the other string value. 

