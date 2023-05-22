// Turning the browser version of Exercise 3 into a for loop

const inputAge = prompt('How old are you?\n');
const askAge = Number(inputAge);
  
const calcFutureAge = (ageToIncrement) => {
  for (let i = 10; i <= 40; i += 10) {
    console.log(`In ${i} years, you will be ${ageToIncrement + i} years old.`);
  }
};

let ageToIncrement = askAge;
calcFutureAge(ageToIncrement);
 
