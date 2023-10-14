const add = function(a, b) {
	return a + b; 
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
  let result = 0; 
  for (let i = 0; i < a.length; i++) {
    result += a[i];
  }
  return result;
};

const multiply = function(a) {
  for (let i = 1; i < a.length; i++) {
    a[0] *= a[i];
  }
 return a[0]
}


const power = function(a, b) {
  let finalNumber = 1; 
  for(let i = 0; i < b; i++) {
     finalNumber = a * finalNumber;
  }
  return finalNumber;
}
;

const factorial = function(n) {
  if (n <= 1) {
    return 1; 
  }
  else {
    for (let i = n - 1; i >= 1; i--) { 
    n *= i; 
    }
  return n
 }
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
