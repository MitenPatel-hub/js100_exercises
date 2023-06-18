/*Write a function that logs whether an integer is between 0 and 50 (inclusive), 
between 51 and 100 (inclusive), greater than 100, or less than 0.

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

Expected Output

25 is between 0 and 50
75 is between 51 and 100
125 is greater than 100
-25 is less than 0 

My Solution:*/

function numberRange(value) {
  if (value < 0) {
    console.log(`${value} is less than 0.`);
  } else if (value <= 50) {
    console.log(`${value} is between 0 and 50.`);
  } else if (value <= 100) {
    console.log(`${value} is between 51 and 100.`);
  } else {
    console.log(`${value} is greater than 100.`)
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

/* Model Answer: Identical solution to mine.*/