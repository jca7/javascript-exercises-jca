const convertToCelsius = function(tempInF) {
  let finalTemp = (tempInF - 32) / 1.8;
  let roundedTemp = Math.round(finalTemp * 10) / 10;
  return roundedTemp;
};

const convertToFahrenheit = function(tempInC) {
  let finalTemp = (tempInC * 1.8) + 32; 
  let roundedTemp = Math.round(finalTemp * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
