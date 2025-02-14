/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let strArr = str.toLowerCase().split('');
    let vow = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    for (let i = 0; i<strArr.length; i++){
      for(let j = 0; j<vow.length; j++){
        if(strArr[i] == vow[j]){
          vowelCount += 1;
        }
      }
    }
    return vowelCount;
}

module.exports = countVowels;