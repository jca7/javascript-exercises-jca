const palindromes = function (a) {
  let aToArray = a.split('')
  const onlyLettersOrNums = aToArray.filter(isLetterOrNum).join('').toLowerCase(); 
  const revStr = [...onlyLettersOrNums].reverse().join('').toLowerCase();
  if (onlyLettersOrNums == revStr) {
    return true;
  } else {
     return false;
  }
};


function isLetterOrNum(char) {
return /^[a-zA-Z0-9]$/.test(char);
}


// Do not edit below this line
module.exports = palindromes;
