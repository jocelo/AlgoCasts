// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome_first(str) {
  var reversed = str.split('').reduce((reduced, character)=>{
    return character + reduced;
  },'');
  return str === reversed;
}

function palindrome_full(str) {
  return str.split('').every((char, idx)=>{
    console.log('times', idx);
    return char === str[str.length - idx - 1];
  });
}

function palindrome(str) {
  return str.split('').splice(0, Math.floor(str.length/2)).every((char, idx)=>{
    return char === str[str.length - idx - 1];
  });
}

module.exports = palindrome;
