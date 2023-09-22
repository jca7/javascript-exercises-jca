// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) 
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
// Leap year: % 4 === 0 && % 100 > 0
// Not leap year: % 4 && % 100 & 400 
// Leap year: % 4 && % 100 && %400 



const leapYears = function(year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log('leap year');
    return true;
  } else if (year % 4 === 0 && year % 100 > 0) {
    console.log('leap year');
    return true;
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 > 0) {
    console.log('not leap year');
    return false;
  } else {
    console.log('not a leap year')
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
