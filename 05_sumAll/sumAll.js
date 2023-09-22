// function that takes 2 integers. Returns the sum of every number between and including them. 
// ex sumAll(1, 4)
// so 1 - 4 === 1 + 2 + 3 + 4 === 10. OR 1, 3 = 1 + 2 + 3 === 6 
// we want to start the loop at first number (ex. 1) i.e. starting counting from number: 1 then add the next number and the next 
// i = 1 or first argument; i <= 2nd argument; i++  
// then we want to stop when we hit the second number (ex. 4)


// step 1 take in two arguments which are integers
// step 2 figure out a way to find the numbers between the first number and the second and add them all.
// step 3 add up all the numbers and store it in a variable === totalSum
// each iteration add the number to totalSum


const sumAll = function(firstNumber, secondNumber) {
  let totalSum = 0;
  if (firstNumber < 0 || secondNumber < 0) {
    return 'ERROR'
  } 
  else if (Number.isInteger(firstNumber) === false || Number.isInteger(secondNumber) === false) {
    return 'ERROR';
  }
  else if (firstNumber < secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i++) {
      totalSum += i;
    }
  }
  else if (secondNumber < firstNumber) {
    for (let i = secondNumber; i <= firstNumber; i++) {
      totalSum += i;
    }
  }
  return totalSum;
};


// Do not edit below this line
module.exports = sumAll;
