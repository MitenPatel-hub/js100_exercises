// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!'; // words = 'Yipeee' + '!!!!' => words = 'Yipeee!!!!'
  return; // return 'Yipeee!!!!' to function => function scream('Yipeee!!!!')
  console.log(words); // scream('Yipeee!!!!') => console.log('Yipeee!!!!')
}

scream('Yipeee');

/* My Solution (Incorrect): 

The code should log Yipeee!!! to the console. 

Model Solution:

It doesn't log anything. The return on line 3 terminates the function before it can log anything.
*/