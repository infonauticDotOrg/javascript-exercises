const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32)*5/9;;
  let rounded = tempC.toFixed(1);
  return Number(rounded);
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC*9/5)+32;
  let rounded = tempF.toFixed(1);
  return Number(rounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
