// What does the following code log to the console?

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

/* My Answer: 

The code will not log anything to the console because there is no call in the code
to log something with console.log. To log 'Yipeee!!!!' we would need to run
console.log(scream('Yipeeee')).

Model Answer:

This program also doesn't log anything. The function returns a value, Yipeee!!!!, 
but it doesn't do anything with it. In particular, it doesn't write it to the console.
*/