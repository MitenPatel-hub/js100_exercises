// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/* My Answer:

I believe the code above will log 'Product2' to the console. This result 
occurs because '113' is passed as the argument to the function barCodeScanner
and lines 7 and 8 dictate JavaScript to print 'Product 2' to the console
whenever '113' is the passed argument.

Model Answer:

Product2
Product3
Product not found!

Since the case clauses of the switch statement lack break statements, control 
falls through from the matching case '113' clause and executes the code in the 
case '142' and default clauses as well. JavaScript doesn't care that the criteria 
for extra case clauses don't match our serial value. This fall-through behavior 
is often undesirable. To avoid it, you must add break statements to each case 
clause.


Analysis:

I was correct in my thinking but answered the question too quickly. I did not 
take the time to notice that the `break;` statements are missing. Therefore, 
the control falls through to `case: '142'` and `default`. Next time, I just
need to pay attention better.*/