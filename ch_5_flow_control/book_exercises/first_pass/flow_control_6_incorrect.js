/* What does this code output to the console?

My answer:

I predict the code below will output 'Not Empty' to the console 
because the function seems to be written to output 'Not Empty'
so long as any argument, including `[]` is passed to it.
Based on the function name, it seems like this function does
not achieve its intended purpose.*/

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/* Model Answer:

The output is Not Empty since, while the array is empty -- it 
has no elements and the length property is 0 -- it isn't falsy. 
Thus, JavaScript executes the first branch of the if statement.

Analysis:

I should mark this one as incorrect and redo the problem later
on because my answer does not include the term "falsy" which
is probably important to explaining the programming logic. */
