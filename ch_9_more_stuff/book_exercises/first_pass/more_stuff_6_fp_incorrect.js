/* Write a function that searches an array of strings for every element that 
matches the regular expression given by its argument. The function should 
return all matching elements in an array.

Example

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

Model Answer #1:*/

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (words, pattern) => words.filter(word => pattern.test(word));

console.log(allMatches(words, /lab/)); 

/*Model Answer #2: 

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, pattern) {
  let matches = [];
  for (let i = 0; i < words.length; i+= 1) {
    if (pattern.test(words[i])) {
      matches.push(words[i]);
    }
  }
  return matches;
}

console.log(allMatches(words, /lab/)); */