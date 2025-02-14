/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //conver string to lowercase.
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

  //convert string to array to reverse and then to string.
  const reversedStr = cleanedStr.split('').reverse().join('');

  //check cleaned and reversed string are same.
  if(cleanedStr == reversedStr){
    return true;
  }
  else{
    return false;
  }
  
}

module.exports = isPalindrome;
