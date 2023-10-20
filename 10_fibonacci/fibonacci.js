const fibonacci = function(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1]; 
  } else if (n < 0) {
    return "OOPS";
  } else {
    let initialValue = [1, 1]

    if (typeof n === 'string') {
      n = parseInt(n);
    }
    for (let i = 2; i < n; i++) {
      initialValue.push(initialValue[initialValue.length - 2] + initialValue[initialValue.length - 1]); 
    }
    return initialValue[initialValue.length -1]
  }

};


// Do not edit below this line
module.exports = fibonacci;
