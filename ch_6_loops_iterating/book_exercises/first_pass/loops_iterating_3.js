/* The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
} 

My Answer:

The infinite loop occurs because there is no break statement after `console.log(counter)` statement. 
Without a break statement after the console.log(counter) statement, there is no other language inside 
the block to stop the `counter = 1` conditional expression from being treated as a truthy value.
That means that JavaScript will abide by the `console.log(counter)` statement and infinitely print it.

Model Answer:

The problem occurs on line 3 where we assign 1 to counter inside the conditional part of the while loop. 
JavaScript accepts this code since the assignment always returns a truthy value (1 in this case), the loop 
condition never becomes false. Furthermore, the test on line 7 never becomes true since the assignment on 
line 3 ensures that counter is always equal to 2 when we execute line 7.*/


