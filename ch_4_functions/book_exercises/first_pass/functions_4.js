/* What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); 

Answer: I predict the above code will log nothing to the console. The `return` keyword on
line 5 will pop the function scream(words) frame off of the call stack and the call stack will
resume running on main: line 9. The scream('Yipeee) caller stops calling once a return
is received. The call stack will not proceed to console.log(words) on line 6. */

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); 
