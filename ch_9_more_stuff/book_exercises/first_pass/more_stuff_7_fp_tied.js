/* What is exception handling and what problem does it solve?

My Answer:

Exception handling is when you specify how JavaScript interprets
acts upon specific errors detected during runtime. You can use 
the try-catch-finally syntax to specify what JavaScript does when 
it detects errors that you specify within the exception parameter of
the catch clause of the try-catch block. The problem this solves
is to allow your program to keep running instead of crashing
when detecting the specified error.

try {
  // perform an operation that may produce an error
} catch(exception) {
  // how JavaScript reacts to an error you specify within the exception parameter
} finally {
  // optional
} 

Model Answer:

Exception handling is a process that deals with errors in a manageable 
and predictable manner. It uses the try/catch statement to catch exceptions 
that the code in the try block raises, and lets the programmer deal with 
the problem in a way that makes sense and perhaps prevents a catastrophic 
failure or nasty bug. */