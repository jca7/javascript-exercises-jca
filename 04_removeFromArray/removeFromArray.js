const removeFromArray = function(setOfNumbers, ...numbersToRemove) {

  for (const number of numbersToRemove) {
    for(let i = 0; i < setOfNumbers.length; i++) {
      if (number === setOfNumbers[i]) {
        setOfNumbers.splice([i], 1);
      } 
    }
  } 
  return setOfNumbers;
}

// Do not edit below this line
module.exports = removeFromArray;
