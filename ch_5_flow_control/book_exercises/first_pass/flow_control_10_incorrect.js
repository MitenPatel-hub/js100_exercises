// Without running this code, what will it print?

function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7);
show(0, 0);
show(4);
show();

/* My Answer:

I predict the code above will print:

show(5, 7);
=>'foo is 5, bar is 42'
show(0, 0);
=>'foo is 0, bar is 42'
show(4);
=>'foo is 4, bar is 42'
show();
=>'foo is 3, bar is 42'

Model Answer:

show(5, 7);  // => foo is 5, bar is 7
show(0, 0);  // => foo is 0, bar is 0
show(4);     // => foo is 4, bar is 42
show();      // => foo is 3, bar is 42

In this problem, a default value is used as the parameter value if the corresponding 
argument is omitted. Here, the first parameter defaults to undefined, while the second 
defaults to null. However, our console.log statement has foo default to 3 if it is 
undefined or null, and bar defaults to 42 if it is undefined or null.*/