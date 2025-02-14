/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2){

  //check if the length of the strings are same.
  if ( str1.length !== str2.length){
    return false;
  }

  //sort the strings by converting them into arrays.
  let sortedstr1 = str1.toLowerCase().split('').sort().join('');
  let sortedstr2 = str2.toLowerCase().split('').sort().join('');

  //check if both strings are same.
  if (sortedstr1 == sortedstr2){
    return true;
  }
  else{
    return false;
  }
}
//console.log(isAnagram ("ct", "act"));
module.exports = isAnagram;
