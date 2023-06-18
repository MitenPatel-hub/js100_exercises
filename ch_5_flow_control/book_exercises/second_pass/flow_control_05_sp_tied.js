// Refactor this statement to use an if statement instead.

return foo() ? 'bar' : qux();

// My Answer:

if (foo()) {
  return 'bar';
} else {
  return qux();
}

// Model Answer:

if (foo()) {
  return 'bar';
} else {
  return qux();
}

/* Model Answer Explanation:

Ternary operators are most useful when the values are simple expressions; 
anything more complicated than calling a function or accessing a variable 
or literal value can lead to unreadable code. Our original code is an excellent 
example of how to use the ternary operator; the refactoring merely demonstrates 
that you understand how it works. */